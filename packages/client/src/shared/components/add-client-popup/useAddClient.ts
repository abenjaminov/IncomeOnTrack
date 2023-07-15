import {useForm} from "react-hook-form";
import {IAddClientArgs, ZAddClientArgs} from "@income-on-track/shared";
import {zodResolver} from "@hookform/resolvers/zod";
import {useApiMutation} from "@shared/hooks/useApi";
import {CacheKeys} from "@shared/types";
import {usePopup} from "@shared/hooks";

export const useAddClient = () => {
  const { fetchAsync: addClients, isLoading } = useApiMutation<IAddClientArgs>('clients', {
    method: 'POST',
    invalidateTags: [CacheKeys.clients],
  })

  const { closePopup } = usePopup()

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<IAddClientArgs>({
    resolver: zodResolver(ZAddClientArgs),
    defaultValues: {
      isActive: true
    }
  });

  const nameRegister = register('name');
  const isActiveRegister = register('isActive');
  const defaultPaymentRegister = register('defaultPayment');

  const nameError = !!errors?.name;
  const isActiveError = !!errors?.isActive;
  const defaultPaymentError = !!errors?.defaultPayment;

  const onSubmit = async (data: IAddClientArgs) => {
    await addClients(data);

    closePopup();
  }

  const onAddClient = handleSubmit(onSubmit);

  return {
    nameRegister,
    isActiveRegister,
    defaultPaymentRegister,
    nameError,
    isActiveError,
    defaultPaymentError,
    onAddClient,
    isLoading
  }
}
