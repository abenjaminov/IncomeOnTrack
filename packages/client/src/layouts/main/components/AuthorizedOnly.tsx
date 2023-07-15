import React from 'react'
import {useNavigation} from "../../../shared";
import {LocalStorageKeys} from "@shared/types";

type AuthorizedOnlyProps = {
    children: React.ReactNode
}

export const AuthorizedOnly: React.FC<AuthorizedOnlyProps> = props => {
    const { navigateRoot } = useNavigation();

    React.useEffect(() => {
        const token = localStorage.getItem(LocalStorageKeys.userToken);

        if(!token) {
            navigateRoot('login');
        }
    }, [])

    return (
        <>{props.children}</>
    )
}
