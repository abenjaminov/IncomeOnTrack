import { store } from '../../store';
import React from 'react';
import { Provider } from 'react-redux';

interface IStoreProvider {
    children?: React.ReactNode;
}

export const StoreProvider : React.FC<IStoreProvider> = props => {

    const { children } = props;

    return <Provider store={store}>{children}</Provider>
}