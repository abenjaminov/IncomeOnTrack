import React from 'react';
import classes from './clients-view.css';
import {ClientTableColumnKey} from "./client-view.confog";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useClients} from "./useClients";

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
    const { clients, isLoading, count } = useClients();

    if(isLoading) return <div>Loading...</div>

    return (
        <div className={classes.clientsView}>
            <TableContainer component={Paper} style={{
                height: '100%',
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Default Payment</TableCell>
                            <TableCell>Debt</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clients.map((client) => (
                          <TableRow key={client.id}>
                              <TableCell>{client.name}</TableCell>
                              <TableCell>{client.defaultPayment}</TableCell>
                              <TableCell>{client.debt}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
