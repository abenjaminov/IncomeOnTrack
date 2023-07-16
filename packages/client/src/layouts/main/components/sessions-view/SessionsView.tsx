import {useSessions} from "./useSessions";
import React from "react";
import {sessionsView, tableContainer} from "./sessions-view.css";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {format} from 'date-fns';

export const SessionsView: React.FC = () => {
  const { sessions, isLoading} = useSessions();

  if(isLoading) return <div>Loading...</div>

  return (
    <div className={sessionsView}>
      <TableContainer className={tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Payed</TableCell>
              <TableCell>Issued Receipt</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions.map((session) => (
              <TableRow key={session.id}>
                <TableCell>{format(session.date, 'dd-MM-yyyy HH:mm')}</TableCell>
                <TableCell>{session.clientName}</TableCell>
                <TableCell>{session.datePayed ? 'Yes' : 'No'}</TableCell>
                <TableCell>{session.issuedReceipt ? 'Yes' : 'No'}</TableCell>
                <TableCell>{session.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
