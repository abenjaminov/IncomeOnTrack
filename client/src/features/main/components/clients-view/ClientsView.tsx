import { IClient } from '@iot/shared';
import React from 'react';
import { Button, View } from '../../../../shared/components';
import { TableCell, TableHeaderRow, TableRow } from '../../../../shared/components/table';
import { Table } from '../../../../shared/components/table/Table';
import { ViewHeader } from '../../../../shared/components/view/components/view-header/ViewHeader';
import { useClients, useModals } from '../../../../shared/hooks';
import { TableColumnSize } from '../../../../shared/types';
import * as classes from './clients-view.css';
import { AddClientModal } from './components/add-client-modal/AddClientModal';

export const ClientsView: React.FC = () => {
    const {clients} = useClients();
    const { openModal } = useModals();

    const onAddClientClicked = React.useCallback(() => {
        openModal({
            name: "AddClientModal",
            size: {
                height: '100%',
                width: '100%'
            },
            component: <AddClientModal />
        })
    }, [])

    return (
        <View>
            <ViewHeader>
                <Button text='Add Client' onClick={onAddClientClicked}/>
            </ViewHeader>
            <Table>
                <TableHeaderRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Pay Per Hour</TableCell>
                    <TableCell size={TableColumnSize.small}>Debt</TableCell>
                </TableHeaderRow>
                {clients && clients.map((client: IClient) => (
                    <TableRow>
                        <TableCell>{client.name}</TableCell>
                        <TableCell>{client.phoneNumber}</TableCell>
                        <TableCell>{client.email}</TableCell>
                        <TableCell>{client.paymentPerHour}</TableCell>
                        <TableCell size={TableColumnSize.small}>{client.debt}</TableCell>
                    </TableRow>
                ))}
            </Table>
        </View>
    )
}