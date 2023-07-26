import {useForm} from "react-hook-form";
import {ILoginArgs, ILoginResponse, ZLoginArgs} from "@income-on-track/shared";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigation} from "@shared/hooks";
import {useApiMutation} from "@shared/hooks/useApi";
import {LocalStorageKeys} from "@shared/types";
import {Routes} from "../../router/router";

export const useLogin = () => {
  const { navigate } = useNavigation()

  const { fetchAsync: login } = useApiMutation<ILoginArgs, ILoginResponse>('auth/login');

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<ILoginArgs>({
    resolver: zodResolver(ZLoginArgs)
  })

  const emailRegistration = register('email');
  const passwordRegistration = register('password');

  const emailFieldError = !!errors?.email;
  const passwordFieldError = !!errors?.password;

  const onSubmit = async (data: ILoginArgs) => {
    const { success, authToken  } = await login(data)

    if(success && authToken) {
      localStorage.setItem(LocalStorageKeys.userToken, authToken);
      navigate(Routes.home);
      return;
    }


  }

  const onLoginSubmit = handleSubmit(onSubmit);

  return {
    emailRegistration,
    passwordRegistration,
    emailFieldError,
    passwordFieldError,
    onLoginSubmit
  }
}
