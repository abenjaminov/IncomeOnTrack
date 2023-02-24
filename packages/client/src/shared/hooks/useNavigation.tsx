import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useNavigation = () => {
    const _navigate = useNavigate();
    const _location = useLocation();

    const navigateCurrentOutlet = React.useCallback((path: string) => {
        _navigate(path);
    }, []);

    const navigate = React.useCallback((path: string) => {
        _navigate(path, { replace: true, state: _location.state });
    }, []);

    const navigateRoot = React.useCallback((path: string) => {
        _navigate(`/${path}`);
    }, []);

    return {
        navigateIn: navigateCurrentOutlet,
        navigate,
        navigateRoot,
    };
};
