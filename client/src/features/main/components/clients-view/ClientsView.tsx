import React from 'react';
import { View } from '../../../../shared/components';
import { Table } from '../../../../shared/components/table/Table';
import { useClients } from '../../../../shared/hooks';
import { ITableRow, TableColumnSize } from '../../../../shared/types';
import * as classes from './clients-view.css';

export const ClientsView: React.FC = () => {
    const {clients} = useClients();

    const clientRows: Array<ITableRow> = React.useMemo(() => {
        if(!clients) return [];

        const clientRows: Array<ITableRow> = [];

        clients.forEach(client => {
            const row: ITableRow = {
                object: client,
                columns: [{
                    propName: 'name'
                }, {
                    propName: 'phoneNumber'
                },{
                    propName: 'email'
                }, {
                    propName: 'paymentPerHour'
                }, {
                    propName: 'debt',
                    size: TableColumnSize.small
                }]
            }

            clientRows.push(row);
        })

        return clientRows;
    }, [clients])
    return (
        <View>
            <Table rows={clientRows} headerRow={{
                columns: [{
                    text: 'Name'
                }, {
                    text: 'Phone Number'
                },{
                    text: 'Email'
                },{
                    text: 'Pay Per Hour'
                }, {
                    text: 'Debt',
                    size: TableColumnSize.small
                }]
            }}/>
        </View>
    )
}