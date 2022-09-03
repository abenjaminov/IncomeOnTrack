import React from 'react';
import { AuthorizedOnly } from '../../shared/components/authorized-only/AuthorizedOnly';

export const MainLayout: React.FC = () => {
    return (
        <AuthorizedOnly>
            <div>
                Main
            </div>
        </AuthorizedOnly>
    )
}