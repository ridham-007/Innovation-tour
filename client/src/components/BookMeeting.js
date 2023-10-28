import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import MenuData from './Menudata';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { notification } from 'antd'
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from 'react';
import DialogBox from './DialogBox';
import { getAllTask, addMeeting, unRegister } from "../actions/auth";
import { Loader } from 'react-overlay-loader';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    p: 4,
    display: "flex",
    minWidth: '40%',
    flexDirection: "column",
    borderRadius: "2%",
    overflow: "hidden",
    '@media (max-width: 1440px)': {
        width: '60%',
    },
    '@media (max-width: 1040px)': {
        width: '75%',
    },
    '@media (max-width: 767px)': {
        width: '90%',
    },
};

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

const BookMeeting = () => {
    const ModelHeader = styled.div`
    display: flex;
    justify-content: space-between;
    `;
    const BottomLine = styled.div`
        width: 100%;
        height: 0.9px;
        margin-top: 10px;
        border: 1px solid #C4CFD4;
    `;

    const [isLoading, setLoading] = useState(false);
    const [uniqueKey, setUniqueKey] = useState(Math.random().toString());
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [allTaskData, setAllTaskData] = useState([]);
    const [openForm, setOpenForm] = useState(false)
    const [selectTask, setSelectTask] = useState('Select Task');
    const [refetch, setReftch] = useState(false);

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user?.AgreementSigned === false) {
            navigate("/agreement");
        }
    }, [])


    const allTasksData = async () => {
        setLoading(true)
        const TaskData = await getAllTask();
        setAllTaskData(TaskData?.allTask);
        if (TaskData?.allTask) {
            setLoading(false)
        }
    }
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
                overflow: 'auto'
            },
        },
    };

    useEffect(() => {
        allTasksData();
    }, [])

    useEffect(() => {
        if (refetch) {
            allTasksData();
            setReftch(false);
        }
    }, [refetch])

    const data = allTaskData.find((task) => task.name === selectTask);

    const handleDialogClose = () => {
        setOpenForm(false)
        setSelectTask('Select Task');
    }
    const handleDialogOpen = async ({ name, taskId, userId }) => {

        if (name === "Cancel Registration") {
            setLoading(true);
            await unRegister({ userId, taskId })
                .then((res) => {
                    setLoading(false);
                    if (!res.success) {
                        notification.open({
                            message: "Error",
                            description: res.msg,
                        });
                    } else {
                        allTasksData();
                        notification.open({
                            message: "Success!",
                            description: res.msg,
                        });
                        setReftch(true);
                    }
                    setOpenForm(false)
                })
                .catch((err) => console.log("err", err));
        }
        else {
            setOpenForm(true)
        }
    }

    const createData = (taskId, name, startdate, enddate, venue, comments, userId, group) => {
        const optionList = [
            {
                name: "Cancel Registration",
                taskId,
                userId
            }
        ];
        const more = <MenuData handleDialogOpen={handleDialogOpen} optionList={optionList} />;
        return { group, taskId, name, startdate, enddate, venue, comments, action: more };
    }

    const rows = [];
    const userData = JSON.parse(localStorage.getItem('user'));
    allTaskData?.forEach(current => {
        let values = current.name.split("(");
        let specificValue = values[1];

        let group = specificValue?.includes("Group");

        if (current.users.includes(userData?._id)) {
            rows.push(
                createData(
                    current._id,
                    current.name,
                    current.startDate.replace("T", " - "),
                    current.endDate.replace("T", " - "),
                    current.venue,
                    current.comments,
                    userData?._id,
                    group? specificValue[6]: ''
                )
            );
        }
    })
const userRegisterIds = [];
    let conflictingIds = allTaskData
        .filter(event => event.users.indexOf(userData?._id) === -1)
        .filter(event => {
            let values1 = event.name.split("(");
            let specificValue1 = values1[1];

            let group1 = specificValue1?.includes("Group");
            const userEvents = allTaskData.filter(e => e.users.includes(userData?._id));
            for (const userEvent of userEvents) {
                let values2 = userEvent.name.split("(");
                let specificValue2 = values2[1];

                let group2 = specificValue2?.includes("Group");
                if (!userRegisterIds?.includes(userEvent._id)){
                    userRegisterIds.push(userEvent?._id);
                }
                if (
                    ((new Date(event.startDate) > new Date(userEvent.startDate) && new Date(event.startDate) < new Date(userEvent.endDate)) ||
                    (new Date(event.endDate) > new Date(userEvent.startDate) && new Date(event.endDate) < new Date(userEvent.endDate)))
                ) {
                    return true;
                }
            }
            return false;
        })
        .map(event => event._id);
    conflictingIds = [...conflictingIds, ...userRegisterIds];

    const columns = [
        { id: 'group', label: 'Group', minWidth: 170 },
        { id: 'name', label: 'Task Name', minWidth: 170 },
        { id: 'startdate', label: 'Start Date', minWidth: 170 },
        {
            id: 'enddate',
            label: 'End Date',
            minWidth: 170,
        },
        { id: 'venue', label: 'Venue', minWidth: 170 },
        { id: 'comments', label: 'Comments', minWidth: 170 },
        {
            id: 'action',
            label: 'Action',
        },
    ];


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const onSubmit = async () => {

        if (selectTask === "Select Task") {
            notification.open({
                message: "Error",
                description: "Please select task"
            });
        }

        if (data.users.includes(userData._id)) {
            notification.open({
                message: "Error",
                description: "You have already register for meeting."
            });
            return
        }
        else {
            setLoading(true);
            setOpenForm(false)
            await addMeeting({ userId: userData._id, taskId: data._id })
                .then((res) => {
                    setLoading(false);
                    if (!res.success) {
                        notification.open({
                            message: "Error",
                            description: res.msg,
                        });
                    } else {
                        notification.open({
                            message: "Success!",
                            description: res.msg,
                        });
                        setReftch(true);
                    }

                })
                .catch((err) => console.log("err", err));
            setUniqueKey(Math.random().toString());
            setSelectTask('Select Task')
        }

    }

    const modalContent = (
        <Box sx={style} key={uniqueKey}>
            <ModelHeader>
                <Typography
                    variant="h6"
                    component="h2"
                    style={{ color: "#163356", fontSize: "22px", fontWeight: "600" }}
                >
                    Register for Company visits
                </Typography>
                <CloseIcon onClick={handleDialogClose} style={{ cursor: "pointer" }} />
            </ModelHeader>
            <BottomLine />
            <div style={{ display: "flex", flexDirection: "column", overflow: "auto", maxHeight: "72vh" }}>
                <div
                    className="dropdown-menu-mui"
                    style={{ display: 'flex', padding: '10px 0px', alignItems: 'center' }}
                >
                    <Typography
                        style={{ marginRight: '10px', whiteSpace: "nowrap", color: "#000000", fontWeight: "600", fontSize: "14px" }}
                    >
                        Select Task :
                    </Typography>
                    <Select
                        id="country"
                        multiline
                        value={selectTask}
                        inputProps={{ 'aria-label': 'Without label' }}
                        name="country"
                        renderValue={(selected) => {
                            if (selected) {
                                return <em style={{ whiteSpace: "break-spaces" }}>{selected}</em>;
                            }
                        }}
                        MenuProps={MenuProps}
                        fullWidth
                        onChange={(e) => setSelectTask(e.target.value)}
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                    >
                        {
                            allTaskData.map((task, index) => {
                                return (
                                    <MenuItem style={{ fontSize: '14px', fontWeight: 'bold' }} value={task.name} id={index} disabled={conflictingIds.includes(task?._id) || Number(task.numberOfSlots) <= task?.users?.length}>{task.startDate.substr(0, 10)}&nbsp; |&nbsp; {task.startDate.substr(11)} to {task.endDate.substr(11)} &nbsp;|&nbsp;{task.name}&nbsp;|&nbsp;{task.venue}  </MenuItem>
                                )
                            })
                        }
                    </Select>
                </div>

                <div className='field_wrapper'>
                    <Typography
                        style={{ marginRight: '10px', whiteSpace: "nowrap", color: "#000000", fontWeight: "600", fontSize: "14px" }}
                    >
                        Start date :
                    </Typography>
                    <div style={{
                        flexGrow: 1, border: '1px solid lightgrey', borderRadius: '5px', padding: '10px', wordWrap: 'break-word', fontWeight: 'bold', textAlign: 'left'
                    }}>
                        {data === undefined ? "---" : data.startDate.replace("T", " - ")}
                    </div>
                </div>
                <div className='field_wrapper'>
                    <Typography

                        style={{ marginRight: '10px', whiteSpace: "nowrap", color: "#000000", fontWeight: "600", fontSize: "14px" }}
                    >
                        End Date :
                    </Typography>
                    <div style={{
                        flexGrow: 1, border: '1px solid lightgrey', borderRadius: '5px', padding: '10px', wordWrap: 'break-word', fontWeight: 'bold', textAlign: 'left'
                    }}>
                        {data === undefined ? "---" : data.endDate.replace("T", " - ")}
                    </div>
                </div>
                {/* <div className='field_wrapper'>
                    <Typography
                        style={{ marginRight: '10px', whiteSpace: "nowrap", color: "#000000", fontWeight: "600", fontSize: "14px" }}
                    >
                        Number of slots :
                    </Typography>
                    <div style={{
                        flexGrow: 1, border: '1px solid lightgrey', borderRadius: '5px', padding: '10px', wordWrap: 'break-word', fontWeight: 'bold', textAlign: 'left'
                    }}>
                        {data === undefined ? "---" : data.numberOfSlots}
                    </div>
                </div> */}
                <div className='field_wrapper'>
                    <Typography
                        style={{ marginRight: '10px', whiteSpace: "nowrap", color: "#000000", fontWeight: "600", fontSize: "14px" }}
                    >
                        Venue :
                    </Typography>
                    <div style={{
                        flexGrow: 1, border: '1px solid lightgrey', borderRadius: '5px', padding: '10px', wordWrap: 'break-word', fontWeight: 'bold', textAlign: 'left'
                    }}>
                        {data === undefined ? "---" : data.venue}
                    </div>
                </div>
                <div className='field_wrapper'>
                    <Typography
                        style={{ marginRight: '10px', whiteSpace: "nowrap", color: "#000000", fontWeight: "600", fontSize: "14px" }}
                    >
                        Comments :
                    </Typography>
                    <div style={{
                        flexGrow: 1, border: '1px solid lightgrey', borderRadius: '5px', padding: '10px', wordWrap: 'break-word', fontWeight: 'bold', textAlign: 'left'
                    }}>
                        {data === undefined ? "---" : data.comments}
                    </div>
                </div>
                <Button
                    variant="contained"
                    style={{
                        alignSelf: 'center',
                        height: '40px',
                        fontSize: '14px',
                        marginTop: '15px',
                        width: '50%',
                        background: '#8C1515',
                        fontWeight: 'bold'
                    }}
                    onClick={onSubmit}
                >
                    Register
                </Button>
            </div>
        </Box >

    );

    return (
        <div className='content management-wrapper'>
            <div className='taskManagement_wrapper' style={{ overflow: "hidden" }}>
                <div style={{ width: "100%", textAlign: "end" }}>
                    <Button
                        variant="contained"
                        style={{
                            whiteSpace: "nowrap",
                            alignSelf: 'center',
                            height: '40px',
                            fontSize: '14px',
                            marginTop: '15px',
                            background: '#8C1515',
                            fontWeight: 'bold'
                        }}
                        onClick={handleDialogOpen}
                    >
                        Company Visits
                    </Button>
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

                <DialogBox
                    open={openForm}
                    onClose={handleDialogClose}
                    content={modalContent}
                />
                <Loader fullPage loading={isLoading} />
            </div>
        </div>
    )
}

export default BookMeeting;

