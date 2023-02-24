import React from 'react';
import {AuthorizedOnly} from "./components/AuthorizedOnly";

export const MainLayout: React.FC = () => {
    return (
        <AuthorizedOnly>
            <div>
                Main Layout
            </div>
        </AuthorizedOnly>
    )
}
