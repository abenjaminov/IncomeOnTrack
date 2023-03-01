import React from 'react';
import classes from './clients-view.css';
import {IClientView} from "@income-on-track/shared";
import {ClientTableColumnKey} from "./client-view.confog";
import {CFormCheck, CTable, CTableDataCell, CTableRow} from "@coreui/react";

const columns = [{
    key: ClientTableColumnKey.name,
    label: 'Name',
    _props: { scope: 'col' },
},{
    key: ClientTableColumnKey.payment,
    label: 'Payment',
    _props: { scope: 'col' },
},{
    key: ClientTableColumnKey.debt,
    label: 'Debt',
    _props: { scope: 'col' },
},{
    key: ClientTableColumnKey.isActive,
    label: 'Active',
    _props: { scope: 'col' },
},{
    key: ClientTableColumnKey.isSalary,
    label: 'Salary',
    _props: { scope: 'col' },
}]

export const ClientsView: React.FC = () => {
    const clients:Array<IClientView> = [{
        id: '1234',
        name: 'John Doe',
        creationDate: new Date(),
        payment: 150,
        isActive: true,
        isSalary: true,
        debt: 100
    }, {
        id: '1235',
        name: 'John Doe',
        creationDate: new Date(),
        payment: 150,
        isActive: true,
        isSalary: true,
        debt: 150
    }, {
        id: '1236',
        name: 'John Doe',
        creationDate: new Date(),
        payment: 150,
        isActive: true,
        isSalary: true,
        debt: 2000
    }]

    return (
        <div className={classes.clientsView}>
            <CTable columns={columns}>
                {clients.map(client => (
                    <CTableRow key={client.id}>
                        <CTableDataCell>{client.name}</CTableDataCell>
                        <CTableDataCell>{client.payment}</CTableDataCell>
                        <CTableDataCell>{client.debt}</CTableDataCell>
                        <CTableDataCell>
                            <CFormCheck checked={client.isActive} />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormCheck checked={client.isSalary} />
                        </CTableDataCell>
                    </CTableRow>
                ))}
            </CTable>
        </div>
    )
}
