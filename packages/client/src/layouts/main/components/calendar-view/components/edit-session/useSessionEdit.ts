import React from 'react';
import {ISessionView, ZSession} from "@income-on-track/shared";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useEvent} from "@shared/hooks";
import {EventType} from "@shared/types/events";

const ZSessionEdit = ZSession.omit({
  userId: true,
  id: true,
})

type ISessionEdit = z.infer<typeof ZSessionEdit>

export const useSessionEdit = (session?: ISessionView) => {
  const { emit } = useEvent(EventType.onSessionSaved);

  const {
    register,
    formState: { errors, isDirty },
    setValue,
    watch,
    reset,
    handleSubmit
  } = useForm<ISessionEdit>({
    resolver: zodResolver(ZSessionEdit),
    defaultValues: session
  })

  React.useEffect(() => {
    reset(session)
  }, [session])

  const paymentRegister = register('payment')
  const notesRegister = register('notes')

  const [date, datePayed, issuedReceipt] = watch(['date', 'datePayed', 'issuedReceipt'])

  const setDate = (date: Date) => {
    setValue('date', date)
  }

  const setDatePayed = () => {
    if(datePayed) {
      setValue('datePayed', undefined)
      return
    }

    setValue('datePayed', new Date())
  }

  const setClientId = (clientId: string) => {
    setValue('clientId', clientId)
  }

  const toggleIssuedReceipt = () => {
    setValue('issuedReceipt', !issuedReceipt)
  }

  const onSubmit = handleSubmit((data) => {
    emit();
  }, errors => {

  });

  return {
    paymentRegister,
    notesRegister,
    setDate,
    date,
    setDatePayed,
    datePayed,
    isDirty,
    setClientId,
    issuedReceipt,
    toggleIssuedReceipt,
    onSubmit
  }
}
