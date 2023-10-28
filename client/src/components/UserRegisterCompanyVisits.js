import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { notification } from 'antd'
import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { getAllTask, getAllUsers } from "../actions/auth";
import { Loader } from 'react-overlay-loader';


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

const UserRegister = () => {

    const [isLoading, setLoading] = useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [allTaskData, setAllTaskData] = useState([]);
    const [selectTask, setSelectTask] = useState();
    const [refetch, setReftch] = useState(false);
    const [allUser, setAllUser] = React.useState([]);


    const allTasksData = async () => {
        setLoading(true)
        const TaskData = await getAllTask();
        setAllTaskData(TaskData?.allTask);
        if (TaskData?.allTask) {
            setLoading(false)
        }
    }

    const allUserData = async () => {
        const userData = await getAllUsers();
        setAllUser(userData?.allUsers);
    }

    useEffect(() => {
        allTasksData();
        allUserData();
    }, [])

    useEffect(() => {
        if (refetch) {
            allTasksData();
            setReftch(false);
        }
    }, [refetch])


    const registerUsersIds = allTaskData.find((task) => task?._id === selectTask)?.users || [];
    const registerUsers = allUser?.filter((curUser) => registerUsersIds?.includes(curUser?._id));
    const taskDataForDisplay = allTaskData.filter((task) => task?._id === selectTask);


    const createData = (taskId, registerUser, email, phone, startdate, enddate, group) => {
        return { taskId, registerUser, email, phone, startdate, enddate, group };
    }

    const rows = [];

    registerUsers?.forEach(current => {
        taskDataForDisplay?.forEach(task => {

            let values = task.name.split("(");
            let specificValue = values[1];

            let group = specificValue?.includes("Group")

            rows.push(
                createData(
                    current._id,
                    current.name,
                    current.email,
                    current.phonenumber,
                    task.startDate.replace("T", " - "),
                    task.endDate.replace("T", " - "),
                    group ? specificValue.replace(")", "") : ""
                )
            );
        })
    });

    const columns = [
        { id: 'registerUser', label: 'Name', minWidth: 170 },
        { id: 'email', label: 'Email', minWidth: 170 },
        { id: 'phone', label: 'Phone Number', minWidth: 170 },
        { id: 'startdate', label: 'Start Date', minWidth: 170 },
        { id: 'enddate', label: 'End Date', minWidth: 170 },
        { id: 'group', label: 'Group', minWidth: 170 },
    ];


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className='content management-wrapper'>
            <div className='taskManagement_wrapper' style={{ overflow: "hidden" }}>
                <div style={{ width: "100%", textAlign: "end", marginTop: '10px' }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" style={{ fontSize: '16px' }}>Select Task</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select-label"
                            value={selectTask}
                            name="country"
                            fullWidth
                            label="Select Task"
                            onChange={(e) => setSelectTask(e.target.value)}
                            style={{ fontSize: '14px', textAlign: "start" }}
                        >
                            {
                                allTaskData.map((task, index) => {
                                    return (
                                        <MenuItem style={{ fontSize: '14px', fontWeight: 'bold' }} value={task._id} id={index}>{task.name}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </div>
                <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <TableContainer sx={{ overflowY: 'visible' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <StyledTableRow>
                                    {columns.map((column) => (
                                        <StyledTableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
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
                                                    return (
                                                        <StyledTableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
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
                        style={{ fontSize: '16px', }}
                    />
                </Paper>

                <Loader fullPage loading={isLoading} />
            </div>
        </div>
    )
}

export default UserRegister;

