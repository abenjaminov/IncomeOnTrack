import React from 'react'
import {useNavigation} from "../../../shared";

type AuthorizedOnlyProps = {
    children: React.ReactNode
}

export const AuthorizedOnly: React.FC<AuthorizedOnlyProps> = props => {
    const { navigateRoot } = useNavigation();

    React.useEffect(() => {
        const token = localStorage.getItem('ioc-token');

        if(!token) {
            navigateRoot('login');
        }
    }, [])

    return (
        <>{props.children}</>
    )
}
