import React from 'react';
import classes from './clients-view.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {usePopups} from "@shared/hooks/usePopups";
import {Button} from "@mui/material";
import {AddClientPopup} from "@shared/components";
import {useFilteredClients} from "@shared/hooks";

export const ClientsView: React.FC = () => {
    const { clients, isLoading, count } = useFilteredClients({});
    const { showPopup } = usePopups();

    if(isLoading) return <div>Loading...</div>

    const onAddClientClicked = () => {
        showPopup({
            component: <AddClientPopup />,
            popupTitle: 'Add Client',
            props: {
                name: 'add-client',
            }
        })
    }

    return (
        <div className={classes.clientsView}>
            <TableContainer component={Paper} className={classes.tableContainer}>
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
            <aside className={classes.asideContainer}>
                <div className={classes.asideFiltersContainer}>
                    <div className={classes.asideTitle}>Filters</div>
                </div>
                <div className={classes.asideActionsContainer}>
                    <div className={classes.asideTitle}>Actions</div>
                    <Button onClick={onAddClientClicked}>Add Client</Button>
                </div>
            </aside>
        </div>
    )
}
