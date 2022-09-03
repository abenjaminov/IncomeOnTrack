import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './authorized-only.module.scss'
import { Navigate } from 'react-router-dom'
import { useGetMeQuery } from '../../api';
import { Route } from '../../../router';

interface IAuthorizedOnly {
    children?: React.ReactNode;
}

export const AuthorizedOnly: React.FC<IAuthorizedOnly> = props => {

    const { children } = props;

    const { isLoading, error } = useGetMeQuery();

    const location = useLocation();

    if (error) {
        return <Navigate to={Route.login} state={location.state} replace={true}/>
    }

    if (isLoading) {
        return <main className={classes.authorizedOnlyContainer}>Loading</main>
    }

    return <>{children}</>
};