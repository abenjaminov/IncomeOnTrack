import {ISessionView, ZSession} from "@income-on-track/shared";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const ZSessionEdit = ZSession.omit({
  userId: true,
  id: true,
})

type ISessionEdit = z.infer<typeof ZSessionEdit>

export const useSessionEdit = (session?: ISessionView) => {
  const {
    register,
    formState: { errors },
    setValue,
    watch
  } = useForm<ISessionEdit>({
    resolver: zodResolver(ZSessionEdit),
    defaultValues: session
  })

  const clientIdRegister = register('clientId')
  const paymentRegister = register('payment')
  const notesRegister = register('notes')

  const [date, datePayed] = watch(['date', 'datePayed'])

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

  return {
    clientIdRegister,
    paymentRegister,
    notesRegister,
    setDate,
    date,
    setDatePayed,
    datePayed,
  }
}
