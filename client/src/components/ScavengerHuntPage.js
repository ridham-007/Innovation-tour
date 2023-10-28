import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import styled from "styled-components";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { getAllUsers } from '../actions/auth';
import { Loader } from "react-overlay-loader";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "grey",
        color: 'white',
        fontSize: 18,
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
const columns = [
    { id: 'name', label: 'Name', minWidth: 170, isCustum: 'no' },
    { id: 'email', label: 'Email', minWidth: 170, isCustum: 'no' },
    {
        id: 'country',
        label: 'Country',
        minWidth: 170,
        isCustum: 'no'
    },
    {
        id: 'address',
        label: 'Address',
        minWidth: 230,
        isCustum: 'no'
    },
    {
        id: 'phone',
        label: 'Phone',
        minWidth: 230,
        isCustum: 'no'
    },
    {
        id: 'role',
        label: 'Role',
        minWidth: 170,
        isCustum: 'no'
    },
    {
        id: 'batch',
        label: 'Batch',
        minWidth: 230,
        isCustum: 'no'
    },
    {
        id: 'mealpreference',
        label: 'Meal Preference',
        minWidth: 170,
        isCustum: 'no'
    },
    {
        id: 'allergy',
        label: 'Allergy',
        minWidth: 170,
        isCustum: 'no'
    },
    {
        id: 'register',
        label: 'Registered for Event',
        minWidth: 170,
        isCustum: 'no'
    },
    {
        id: 'scavenger',
        label: 'Scavenger Hunt',
        minWidth: 170,
        isCustum: 'yes'
    }
];


const ScavengerHuntPage = (props) => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const rows = [];
    const allUserData = async () => {
        const userData = await getAllUsers();
        setData(userData?.allUsers);
    }

    useEffect(() => {
        allUserData();
    }, [])
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const createData = (name, email, country, address, phone, userId, batch, role, mealpreference, allergy, register, scavenger) => {
        return { name, email, country, address, phone, batch, role, mealpreference, allergy, register: (!!register ? "YES" : "NO"), scavenger: { scavenger } };
    }

    let fillterUsers = data?.filter(users => {
        if (!!users.scavengerHunt) {
            return users
        }

    })
    console.log("kokok", fillterUsers);

    fillterUsers?.forEach(current => {
        rows.push(
            createData(
                current?.name,
                current?.email,
                current?.country,
                current?.address,
                current?.phonenumber,
                current?._id,
                current?.batch,
                current?.role,
                current?.mealPreference,
                current?.allergy,
                current?.isRegistered,
                current?.scavengerHunt
            )
        );
    });

    return (
        <div className='taskManagement_wrapper' style={{ overflow: "hidden", padding: "1em 0.5em 0.2em" }}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <TableContainer sx={{ overflowY: 'visible' }} >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <StyledTableRow>
                                {columns.map((column) => (
                                    <StyledTableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontSize: '16px' }}
                                    >
                                        {column.label}
                                    </StyledTableCell>
                                ))}
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (

                                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                const custom = column.isCustum;
                                                return (
                                                    <StyledTableCell key={column.id} align={column.align} style={{ fontSize: '14px' }}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value) : (custom === "yes" ?
                                                                (<>
                                                                    <div>Name: {value?.scavenger?.name === undefined ? "-" : value?.scavenger?.name} </div>
                                                                    <div>Cohort: {value?.scavenger?.cohort === undefined ? "-" : value?.scavenger?.cohort}</div>
                                                                    <div>Payment: {value?.scavenger?.isPayment === true ? "Done" : "Pending"}</div>
                                                                </>) : value)}
                                                    </StyledTableCell>
                                                );
                                            })}
                                        </StyledTableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    style={{ fontSize: '14px' }}
                />
            </Paper>
            <Loader fullPage loading={isLoading} />
        </div>
    )
}

export default ScavengerHuntPage