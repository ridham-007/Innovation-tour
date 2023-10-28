import Paper from '@mui/material/Paper';
import styled from "styled-components";
import React, { useEffect, useRef, useState } from 'react'
import { Loader } from 'react-overlay-loader';



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { tableCellClasses } from '@mui/material/TableCell';
import { schedule } from '../data';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "grey",
        color: 'white',
        fontSize: 18,
        borderRight: "1px solid white !important",
        fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,

    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#ddd',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Scheduler = () => {
    const [isLoading, setLoading] = useState(false);
    const [allTaskData, setAllTaskData] = useState(schedule || [])


    const columns = [
        { id: 'day', label: 'Day', minWidth: 80 },
        { id: 'month', label: 'Month', minWidth: 130 },
        { id: 'dayName', label: "Day's name", minWidth: 140 },
        { id: 'time', label: 'Time', minWidth: 150 },
        {
            id: 'venue',
            label: 'Venue',
            minWidth: 160,
        },
        {
            id: 'address',
            label: 'Address',
            minWidth: 250,
        },
        { id: 'description', label: 'Descriptions', minWidth: 180 },
        { id: 'website', label: 'Website', minWidth: 170 },
        { id: 'organizer', label: 'Organizer', minWidth: 170 },
        { id: 'speakers', label: 'Speaker', minWidth: 170 },
        { id: 'reservedBy', label: 'Reserved By', minWidth: 170 },
        { id: 'agenda', label: 'Agenda', minWidth: 550 },
    ];

    return (
        <div className='taskManagement_wrapper' id="details"
            style={{
                marginTop: '3.8em'
            }}>
            <Paper sx={{ width: '100%', overflow: 'auto', marginTop: "10px" }} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <TableContainer sx={{ overflowY: 'visible', maxHeight: `calc(100vh - (70px + 65px))` }}>
                    <Table className="sticky-header-table" stickyHeader aria-label="sticky table">
                        <TableHead >
                            <StyledTableRow >
                                <StyledTableCell align="center" sx={{ borderRight: "1px solid white" }} colSpan={3}>
                                    Event Date
                                </StyledTableCell>
                                <StyledTableCell align="center" colSpan={9}>
                                    Other Details
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                {columns.map((column) => (
                                    <StyledTableCell
                                        key={column.id}
                                        sx={{ borderRight: "1px solid white" }}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </StyledTableCell>
                                ))}
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {allTaskData
                                .map((row) => {
                                    return (
                                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code} sx={{ cursor: "pointer" }}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <StyledTableCell key={column.id} align={column.align}>
                                                        {column.id === 'agenda' ? <>
                                                            {value.map((data) => {
                                                                return (<>
                                                                    <li>{data}</li>
                                                                </>)
                                                            })}
                                                        </> : column.id === 'website' ? <>{value.map((data) => {
                                                            return (
                                                                <div>
                                                                    {data.name === "N/A" ? <>{data.name}</> : <a href={data.link}>{data.name}</a>}
                                                                </div>
                                                            )
                                                        })}</> : column.id === 'speakers' ? <> {value?.map((data) => {
                                                            return (
                                                                <li>{data}</li>
                                                            )
                                                        })}</> : value}
                                                    </StyledTableCell>
                                                );
                                            })}
                                        </StyledTableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Loader fullPage loading={isLoading} />
        </div >
    )
}

export default Scheduler