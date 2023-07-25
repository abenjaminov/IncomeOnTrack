import React from 'react';
import {ISessionView, ZCreateSessionArgs} from "@income-on-track/shared";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useEvent} from "@shared/hooks";
import {EventType} from "@shared/types/events";
import {useSessionsCRUD} from "@shared/hooks/useSessionsCRUD";
import { isEqual } from 'date-fns'

const ZSessionEdit = ZCreateSessionArgs.omit({
  userId: true
})

type ISessionEdit = z.infer<typeof ZSessionEdit>

export const useSessionEditor = (sessionDate: Date, session?: ISessionView) => {
  const { createOrUpdateSession } = useSessionsCRUD();
  const { emit } = useEvent(EventType.onSessionSaved);
  const [selectedClientName, setSelectedClientName] = React.useState<string | undefined>(session?.clientName)

  const {
    register,
    formState: { errors, isDirty, defaultValues },
    setValue,
    watch,
    reset,
    handleSubmit,
    control
  } = useForm<ISessionEdit>({
    resolver: zodResolver(ZSessionEdit),
    defaultValues: session
  })

  React.useEffect(() => {
    let _session: ISessionEdit | undefined;

    if(!session) {
      _session = {
        clientId: '',
        payment: 0,
        date: sessionDate,
        notes: '',
        issuedReceipt: false
      }
    } else {
      _session = ZSessionEdit.parse(session)
    }

    setSelectedClientName(session?.clientName);
    reset(_session)
  }, [session, sessionDate])

  const notesRegister = register('notes')

  const [date, datePayed, issuedReceipt, clientId] = watch(['date', 'datePayed', 'issuedReceipt', 'clientId'])

  const setDate = (date: Date) => {
    setValue('date', date, { shouldDirty: true } )
  }

  const setDatePayed = () => {
    const newDatePayed = datePayed ? undefined: new Date()

    setValue('datePayed', newDatePayed, { shouldDirty: true })
  }

  const setClientId = (clientId: string) => {
    setValue('clientId', clientId, { shouldDirty: clientId !== defaultValues?.clientId })
  }

  const toggleIssuedReceipt = () => {
    setValue('issuedReceipt', !issuedReceipt, { shouldDirty: issuedReceipt !== defaultValues?.issuedReceipt })
  }

  const onSubmit = handleSubmit(async (data) => {
    await createOrUpdateSession(data)
    emit();
  }, errors => {
    console.log(errors)
  });

  return {
    notesRegister,
    setDate,
    date,
    setDatePayed,
    datePayed,
    isDirty,
    setClientId,
    issuedReceipt,
    toggleIssuedReceipt,
    onSubmit,
    clientId,
    selectedClientName,
    setSelectedClientName,
    control,
    canSubmit: !Object.keys(errors).length && isDirty && clientId
  }
}
