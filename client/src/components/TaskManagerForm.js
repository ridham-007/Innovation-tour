
import { Button, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import { TextField, IconButton } from '@mui/material';
import styled from "styled-components";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useRef, useState } from 'react'
import DialogBox from './DialogBox';
import { addTask, deleteTask, getAllTask, updateTask } from '../actions/auth';
import { Loader } from 'react-overlay-loader';
import MenuData from './Menudata';
import { notification } from 'antd';
import { Search } from '@mui/icons-material';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { tableCellClasses } from '@mui/material/TableCell';

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



const initialData = {
    taskName: "",
    startDate: new Date().toISOString().slice(0, 16),
    endDate: new Date().toISOString().slice(0, 16),
    numberOfSlots: "",
    venue: "",
    comments: ""
}


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    p: 4,
    display: "flex",
    flexDirection: "column",
    borderRadius: "2%",

    '@media (max-width: 767px)': {
        width: 350,
    },
};
const TaskManagerForm = () => {
    const [isLoading, setLoading] = useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchInput, setSearchInput] = useState("");

    const [isEdit, setIsEdit] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const [data, setData] = useState(initialData)
    const [allTaskData, setAllTaskData] = useState([])
    const rows = [];

    const getallTaskData = async () => {
        const userData = await getAllTask();
        setAllTaskData(userData?.allTask);
    }

    useEffect(() => {
        getallTaskData();
    }, [])
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
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prevData) => ({
            ...prevData, [name]: value
        }))
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleDialogClose = () => {
        setOpenForm(false)
    }

    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    let idRef = useRef(null);
    const handleDialogOpen = async ({ taskId, name }) => {
        setData(initialData)
        setOpenForm(true)
        if (name === "Edit") {
            setIsEdit(true)
            const dataObj = allTaskData.find((task) => task._id === taskId)
            idRef.current = dataObj._id;
            setData({
                taskName: dataObj.name,
                startDate: dataObj.startDate,
                endDate: dataObj.endDate,
                numberOfSlots: Number(dataObj.numberOfSlots),
                venue: dataObj.venue,
                comments: dataObj.comments
            })
        }
        if (name === "Delete") {
            const dataObj = allTaskData.find((task) => task._id === taskId)
            setLoading(true);
            const response = await deleteTask({
                id: dataObj._id,
            });
            setLoading(false);
            if (response) {
                notification.open({
                    message: "Success!",
                    description: response.msg,
                });
                getallTaskData()
            }

        }
        if (name === undefined) {
            setIsEdit(false)
            setOpenForm(true)
        }
    }
    const onSubmit = async () => {
        if (Object.values(data).every((val) => val.length > 0)) {
            setLoading(true);
            await addTask(data)
                .then((res) => {
                    setLoading(false);
                    if (!res.success) {
                        notification.open({
                            message: "Error",
                            description: res.msg,
                        });
                    } else {
                        getallTaskData()
                        notification.open({
                            message: "Success!",
                            description: res.msg,
                        });
                    }
                    setOpenForm(false)
                    setData(initialData)
                })
                .catch((err) => console.log("err", err));
        } else {
            notification.open({
                message: "Error!",
                description: "Pleases fill all field!",
            });
        }
    }

    const onUpdateHandler = async () => {
        setLoading(true);
        const response = await updateTask({
            task: {
                name: data.taskName,
                startDate: data.startDate,
                endDate: data.endDate,
                numberOfSlots: data.numberOfSlots,
                venue: data.venue,
                comments: data.comments
            },
            id: idRef.current,
        });

        if (response) {
            notification.open({
                message: "Success!",
                description: response.msg,
            });

            setData(initialData);
            getallTaskData();
            setOpenForm(false);
            setLoading(false);
            setIsEdit(false);
        }

    }

    const modalContent = (
        <Box sx={style}>
            <ModelHeader>
                <Typography
                    variant="h6"
                    component="h2"
                    style={{ color: "#163356", fontSize: "22px", fontWeight: "600" }}
                >
                    {!isEdit ? "Add Task" : "Edit Task"}
                </Typography>
                <CloseIcon onClick={handleDialogClose} style={{ cursor: "pointer" }} />
            </ModelHeader>
            <BottomLine />
            <div className='field_wrapper'>
                <Typography
                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    Name
                </Typography>
                <TextField
                    margin="normal"
                    style={{
                        width: '70%',
                        margin: '0px'
                    }}
                    name='taskName'
                    size="small"
                    inputProps={{ style: { fontSize: 14 } }}
                    value={data.taskName}
                    onChange={handleChange}
                />
            </div>
            <div className='field_wrapper'>
                <Typography
                    style={{ whiteSpace: "nowrap", color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    Start date
                </Typography>
                <input
                    style={{ width: '70%', marginBottom: "8px", margin: '0px' }}
                    type='datetime-local'
                    name='startDate'
                    value={data.startDate}
                    onChange={handleChange}
                />
            </div><div className='field_wrapper'>
                <Typography

                    style={{ whiteSpace: "nowrap", color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    End Date
                </Typography>
                <input
                    style={{ width: '70%', margin: "0px" }}
                    type='datetime-local'
                    name='endDate'
                    value={data.endDate}
                    onChange={handleChange}
                />
            </div>
            <div className='field_wrapper'>
                <Typography
                    style={{ whiteSpace: "nowrap", color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    Number of slots
                </Typography>
                <TextField
                    margin="normal"
                    style={{ width: '70%', margin: '0px' }}
                    type='number'
                    size="small"
                    name='numberOfSlots'
                    inputProps={{ style: { fontSize: 14 } }}
                    value={data.numberOfSlots}
                    onChange={handleChange}
                />
            </div>
            <div className='field_wrapper'>
                <Typography
                    style={{ whiteSpace: "nowrap", color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    Venue
                </Typography>
                <TextField
                    multiline
                    maxRows={4}
                    margin="normal"
                    style={{ width: '70%', margin: '0px' }}
                    type='text'
                    size="small"
                    name='venue'
                    inputProps={{ style: { fontSize: 14 } }}
                    value={data.venue}
                    onChange={handleChange}
                />
            </div>
            <div className='field_wrapper'>
                <Typography
                    style={{ whiteSpace: "nowrap", color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    Comments
                </Typography>
                <TextField
                    multiline
                    maxRows={4}
                    margin="normal"
                    style={{ width: '70%', margin: '0px' }}
                    type='text'
                    size="small"
                    name='comments'
                    inputProps={{ style: { fontSize: 14 } }}
                    value={data.comments}
                    onChange={handleChange}
                />
            </div>
            {!isEdit ? <Button
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
                Submit
            </Button> : <Button
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
                onClick={onUpdateHandler}
            >
                Update
            </Button>}
        </Box>

    );


    const createData = (name, startTime, taskId, endTime, numberOfSlots, venue, comments) => {
        const optionList = [
            {
                name: "Edit",
                taskId,
            },
            {
                name: "Delete",
                taskId,
            },
        ];
        const more = <MenuData handleDialogOpen={handleDialogOpen} optionList={optionList} />;
        return { name, startTime, endTime, numberOfSlots, venue, comments, action: more };
    }

    let fillterTasks = allTaskData?.filter(tasks => {
        // if search is empty and if "all" or nothing is selected return the entire array
        if ((searchInput === "")) {
            return tasks
            // if the filter is not selected, return whats included with the search term 
        } else if (tasks.name.toLowerCase().includes(searchInput.toLowerCase())) {
            return tasks
        }
    })

    fillterTasks?.forEach(current => {
        rows.push(
            createData(
                current.name,
                current.startDate.replace("T", " - "),
                current._id,
                current.endDate.replace("T", " - "),
                current.numberOfSlots,
                current.venue,
                current.comments
            )
        );
    });

    const columns = [
        { id: 'name', label: 'Task name', minWidth: 170 },
        { id: 'startTime', label: 'Start time', minWidth: 170 },
        {
            id: 'endTime',
            label: 'End time',
            minWidth: 170,
        },
        {
            id: 'numberOfSlots',
            label: 'Number of slots',
            minWidth: 230,
        },
        { id: 'venue', label: 'Venue', minWidth: 170 },
        { id: 'comments', label: 'Comments', minWidth: 170 },
        {
            id: 'action',
            label: 'Action',
        },
    ];

    return (
        <div className='taskManagement_wrapper'>
            <div style={{ display: 'flex', alignItems: 'space-between', width: '100%' }}>
                <TextField
                    size='small'
                    variant="outlined"
                    placeholder="Search by User Name"
                    value={searchInput}
                    onChange={handleSearchChange}
                    className='searchbar'
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        fontSize: '14px',
                        marginTop: '15px',
                        display: 'flex',
                        justifyContent: 'left',
                        marginBottom: '10px'
                    }}
                    InputProps={{
                        endAdornment: (
                            <IconButton>
                                <Search />
                            </IconButton>
                        ),
                        style: { fontSize: 14 }
                    }}
                />

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
                        Add Task
                    </Button>
                </div>
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
    )
}

export default TaskManagerForm