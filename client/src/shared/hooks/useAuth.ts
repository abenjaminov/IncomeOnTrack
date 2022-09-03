import { ILoginArgs } from '@iot/shared';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Route } from '../../router';
import { setToken as setTokenInStore } from '../../shared/slices';
import { useLoginUserMutation } from '../api';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [ login ] = useLoginUserMutation();

  const _login = React.useCallback(async (paylod: ILoginArgs) => {
    try {
      const token = await login(paylod).unwrap();
      
      if (token) {
        dispatch(setTokenInStore(token))
        navigate(Route.home, { replace: true, state: location.state });
      }
    }
    catch(e) {
      console.error("login failed");
    }

  }, [])

  return { 
    login: _login
 };
};