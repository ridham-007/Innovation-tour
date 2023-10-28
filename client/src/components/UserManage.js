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
import MenuData from './Menudata';
import { getAllUsers } from '../actions/auth';
import { TextField, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogBox from './DialogBox';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { updateUser } from '../actions/auth';
import { notification } from "antd";
import FormControl from '@mui/material/FormControl';
import { Loader } from "react-overlay-loader";
import { deleteUser } from '../actions/auth';
import Checkbox from '@mui/material/Checkbox';
import TaskManagerForm from './TaskManagerForm';
import UserRegister from './UserRegisterCompanyVisits';
import ScavengerHuntPage from './ScavengerHuntPage';

const BottomLine = styled.div`
    width: 100%;
    height: 0.9px;
    margin-top: 10px;
    border: 1px solid #C4CFD4;
`;

const ModelHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

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

const dropdown = {
    display: 'flex',
    justifyContent: 'space-evenly',

    '@media (max-width: 767px)': {
        display: 'block'
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

const UserManage = () => {
    const [userManagement, setUserManagement] = useState('task');
    const [openModal, setOpenModal] = useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchInput, setSearchInput] = useState("");
    const [country, setContry] = useState("");
    const [role, setRoll] = useState("");
    const [selectRole, setSelectRoll] = useState("");
    const [data, setData] = React.useState([]);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openDialogDelete, setOpenDialogDelete] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [countryName, setCountryName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phonenumber, setPhoneNumber] = React.useState('');
    const [userBatch, setBatch] = React.useState('');
    const [selectedId, setUserId] = React.useState('');
    const [isLoading, setLoading] = useState(false);
    const [checked, setChecked] = React.useState(true);


    const [registerChecked, setRegisterChecked] = React.useState(true);
    const [registered, handleRegisteredChange] = React.useState(false);
    const [scavengerPayment, setScavengerPaymentChecked] = React.useState(false);


    const handleDepositChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleRegisterChange = (event) => {
        setRegisterChecked(event.target.checked);
    };

    const handleScavengerPaymentChange = (event) => {
        setScavengerPaymentChecked(event.target.checked);
    };

    const rows = [];

    const allUserData = async () => {
        const userData = await getAllUsers();
        setData(userData?.allUsers);
    }

    useEffect(() => {
        allUserData();
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        setOpenDialogDelete(false);
    };

    const onContryChange = (e) => {
        e.preventDefault();
        setContry(e.target.value);
    }

    const onRoleChange = (e) => {
        e.preventDefault();
        setRoll(e.target.value);
    }

    const onBatchChange = (e) => {
        e.preventDefault();
        setBatch(e.target.value);
    }

    const onRoleSelect = (e) => {
        e.preventDefault();
        setSelectRoll(e.target.value);
    }

    const handleDialogOpen = ({ name, userId }, id, setAnchorEl) => {
        if (name === "Edit") {
            setAnchorEl(null);
            setOpenDialog(true);
            const foundUser = data?.find(cur => cur?._id === userId);

            if (foundUser) {
                setName(foundUser?.name);
                setAddress(foundUser?.address);
                setCountryName(foundUser?.country);
                setEmail(foundUser?.email);
                setRoll(foundUser?.role);
                setPhoneNumber(foundUser?.phonenumber);
                setUserId(userId);
                setBatch(foundUser?.batch);
                setChecked(foundUser?.depositCredited);
                setRegisterChecked(foundUser?.isRegistered);
                setScavengerPaymentChecked(foundUser?.scavengerHunt?.isPayment)
            }
        }

        if (name === "Delete") {
            setAnchorEl(null);
            setOpenDialogDelete(true);
        }
    }
    const createData = (name, email, country, address, phone, userId, batch, role, mealpreference, allergy, register, scavenger) => {
        const optionList = [
            {
                name: "Edit",
                userId,
            },
            {
                name: "Delete",
                userId,
            },
        ];
        const more = <MenuData handleDialogOpen={handleDialogOpen} optionList={optionList} />;

        return { name, email, country, address, phone, batch, role, mealpreference, allergy, register: (!!register ? "YES" : "NO"), scavenger: { scavenger }, action: more };
    }

    let fillterUsers = data?.filter(users => {
        let addUser = true;
        if (registered && !users.isRegistered) {
            addUser = false;
        }
        if (addUser) {
            // if search is empty and if "all" or nothing is selected return the entire array
            if ((searchInput === "" && selectRole === "" && country === "")) {
                return users
                // if the filter is not selected, return whats included with the search term 
            } else if (selectRole === "" && country === "" && users.name.toLowerCase().includes(searchInput.toLowerCase())) {
                return users

                // if search is empty and filter drop down value exists return what matches with the filter 
            } else if (searchInput === "" && country === "" && users.role.toString().includes(selectRole)) {
                return users
                // if there neither are empty do logic here
            } else if (selectRole === "" && searchInput === "" && users.country.toString().includes(country)) {
                return users
                //if search and country selected
            } else if (selectRole === "" && users.name.toLowerCase().includes(searchInput.toLowerCase()) && users.country.toString().includes(country)) {
                return users;
            }
            else if (searchInput === "" && users.role.toString().includes(selectRole) && users.country.toString().includes(country)) {
                return users;
            }
            else if (searchInput !== "" && selectRole !== "" && country !== "" && users.name.toLowerCase().includes(searchInput.toLowerCase()) && users.role.toString().includes(selectRole) && users.country.toString().includes(country)) {
                return users;
            }
        }
    })

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
        },
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
        setLoading(true);
        const foundUser = data?.find(cur => cur?._id === selectedId);
        const response = await updateUser({
            user: {
                name,
                email,
                phonenumber,
                role,
                country: countryName,
                address,
                batch: userBatch,
                depositCredited: checked,
                isRegistered: registerChecked,
                scavengerHunt: {
                    ...foundUser.scavengerHunt,
                    isPayment: scavengerPayment
                }
            },
            id: selectedId,
        });
        setLoading(false);
        setOpenDialog(false);
        notification.open({
            message: "Success!",
            description: response.msg,
        });
        allUserData();
    }

    const onExport = () => {
        const csvData = [
            ["Name", "Email", "Country", "Address", "Phone", "Role", "Batch", "Meal Prefrence", "Allergy", "Registered for Event"],
        ];

        if (Array.isArray(rows) && rows.length >= 1) {
            rows.forEach(tupple => {
                csvData.push([tupple.name, tupple.email, tupple.country, tupple.address, tupple.phone, tupple.role, tupple.batch, tupple.mealpreference, tupple.allergy, tupple.register]);
            });
            let dataToExport = csvData.reduce((preRow, curRow) => {
                let proceed = curRow.reduce((preVal, curVal) => {
                    if (!curVal) {
                        curVal = "";
                    }
                    const fieldValue = curVal.includes(',') ? `"${curVal}"` : curVal;
                    preVal += fieldValue.trim() + ",";
                    return preVal;
                }, "");
                preRow += proceed.substring(0, proceed.length - 1) + "\r\n"
                return preRow;
            }, "");

            let blob = new Blob([dataToExport], { type: 'text/csv;charset=utf-8' });
            let url = (window.URL || window["webkitURL"]).createObjectURL(blob);
            let link = window.document.createElement("a");
            link.href = url;
            link.download = "UserDetails.csv";
            link.click();
        }
    }


    const onUserDelete = async () => {
        setLoading(true);
        const response = await deleteUser({
            id: selectedId,
        });
        setLoading(false);
        setOpenDialogDelete(false);
        notification.open({
            message: "Success!",
            description: response.msg,
        });
        allUserData();
    }

    const modalContent = (
        <Box sx={style}>
            <ModelHeader>
                <Typography
                    variant="h6"
                    component="h2"
                    style={{ color: "#163356", fontSize: "22px", fontWeight: "600" }}
                >
                    Edit User
                </Typography>
                <CloseIcon onClick={handleDialogClose} style={{ cursor: "pointer" }} />
            </ModelHeader>
            <BottomLine />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography

                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    Name
                </Typography>
                <TextField
                    margin="normal"
                    style={{ width: '70%', marginLeft: '45px' }}
                    id="title"
                    size="small"
                    inputProps={{ style: { fontSize: 14 } }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography

                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    Email
                </Typography>
                <TextField
                    margin="normal"
                    style={{ width: '70%', marginLeft: '45px' }}
                    id="title"
                    size="small"
                    inputProps={{ style: { fontSize: 14 } }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography

                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    Country
                </Typography>
                <TextField
                    margin="normal"
                    style={{ width: '70%', marginLeft: '30px' }}
                    id="title"
                    size="small"
                    inputProps={{ style: { fontSize: 14 } }}
                    value={countryName}
                    onChange={(e) => setCountryName(e.target.value)}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography

                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    Address
                </Typography>
                <TextField
                    margin="normal"
                    style={{ width: '70%', marginLeft: '30px' }}
                    id="title"
                    size="small"
                    inputProps={{ style: { fontSize: 14 } }}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography

                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    Phone
                </Typography>
                <TextField
                    margin="normal"
                    style={{ width: '70%', marginLeft: '45px' }}
                    id="title"
                    size="small"
                    inputProps={{ style: { fontSize: 14 } }}
                    value={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                    
                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    Batch
                </Typography>
                <TextField
                    margin="normal"
                    style={{ width: '70%', marginLeft: '45px' }}
                    id="title"
                    size="small"
                    inputProps={{ style: { fontSize: 14 } }}
                    value={userBatch}
                    onChange={(e) => setBatch(e.target.value)}
                />
            </div> */}
            <div style={{ display: 'flex', margin: '5px 0', alignItems: 'center' }}>
                <Typography

                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px", marginRight: "17px" }}
                >
                    Select Role
                </Typography>
                <select id="country" name="country" onChange={onRoleChange} value={role} style={{ width: '150px', height: '35px', borderRadius: '5px', paddingLeft: '15px' }}>
                    <option value="select">Select</option>
                    <option value="Student">Student</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <div style={{ display: 'flex', margin: '5px 0', alignItems: 'center' }}>
                <Typography

                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px", marginRight: "10px" }}
                >
                    Select Batch
                </Typography>
                <select id="country" name="country" onChange={onBatchChange} value={userBatch} style={{ width: '150px', height: '35px', borderRadius: '5px', paddingLeft: '15px' }}>
                    <option value="">Select</option>
                    <option value="Central European Time Batch">Central European Time Batch</option>
                    <option value="Pacific Daylight Time Batch">Pacific Daylight Time Batch</option>
                    <option value="Japan Standard Time Batch">Japan Standard Time Batch</option>

                </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>

                <Typography
                    sx={{ mt: 0 }}
                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px", marginRight: "10px" }}
                >
                    Deposit Credited
                </Typography>
                <Checkbox
                    checked={checked}
                    onChange={handleDepositChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>

                <Typography
                    sx={{ mt: 0 }}
                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px", marginRight: "10px" }}
                >
                    Register User
                </Typography>
                <Checkbox
                    checked={registerChecked}
                    onChange={handleRegisterChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>

                <Typography
                    sx={{ mt: 0 }}
                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px", marginRight: "10px" }}
                >
                    ScavengerHunt Payment
                </Typography>
                <Checkbox
                    checked={scavengerPayment}
                    onChange={handleScavengerPaymentChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            <Button
                variant="contained"
                style={{
                    alignSelf: 'center',
                    width: '140px',
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
            </Button>
        </Box>
    );

    const modalContent1 = (
        <Box sx={style}>
            <ModelHeader>
                <Typography
                    variant="h6"
                    component="h2"
                    style={{ color: "#163356", fontSize: "22px", fontWeight: "600" }}
                >
                    Delete User
                </Typography>
                <CloseIcon onClick={handleDialogClose} style={{ cursor: "pointer" }} />
            </ModelHeader>
            <BottomLine />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography

                    style={{ color: "#000000", fontWeight: "600", fontSize: "14px" }}
                >
                    Are you sure, you want to delete the User?
                </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                <Button
                    variant="contained"
                    style={{
                        alignSelf: "center", background: '#8C1515', width: '140px', height: '40px', fontSize: '14px', marginRight: '15px', fontWeight: 'bold'
                    }}
                    onClick={onUserDelete}
                >
                    Yes
                </Button>
                <Button
                    variant="contained"
                    style={{
                        alignSelf: "center", background: '#8C1515', width: '140px', height: '40px', fontSize: '14px', fontWeight: 'bold'
                    }}
                    onClick={handleDialogClose}
                >
                    No
                </Button>
            </div>
        </Box>
    );

    const countryList = [];

    data.forEach((obj) => {
        if (!countryList.includes(obj.country)) {
            countryList.push(obj.country);
        }
    });
    return (

        <div id="details" >

            <div className="content management-wrapper" >
                <div className='side-bar_icon' >
                    {openModal ?
                        <svg
                            onClick={() => setOpenModal((prevVal) => !prevVal)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> : <svg
                            onClick={() => setOpenModal((prevVal) => !prevVal)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    }
                    <div className='link_sidebar' >
                        {
                            openModal &&
                            <>
                                <div className='list_link' onClick={() => { setUserManagement('task'); setOpenModal(false) }}>Task Management</div>
                                <div className='list_link' onClick={() => { setUserManagement('user'); setOpenModal(false) }}>User Management</div>
                                <div className='list_link' onClick={() => { setUserManagement('registerUser'); setOpenModal(false) }}>Company Visit</div>
                                {/* <div className='list_link' onClick={() => { setUserManagement('scavengerHunt'); setOpenModal(false) }}>Scavenger Hunt</div> */}
                            </>
                        }
                    </div>
                </div>

                {userManagement === 'user' &&
                    <div className='user_management_wrapper'>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextField
                                size='small'
                                variant="outlined"
                                placeholder="Search by User Name"
                                value={searchInput}
                                onChange={handleChange}
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
                            <div style={{ dropdown }}>
                                <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                    <Select
                                        value={country}
                                        onChange={onContryChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        style={{ fontSize: '14px' }}
                                    >
                                        <MenuItem value="" style={{ fontSize: '14px' }}>
                                            <em>Select Country</em>
                                        </MenuItem>
                                        {
                                            countryList?.map(countryData => {
                                                return <MenuItem value={countryData} style={{ fontSize: '14px' }}>{countryData}</MenuItem>
                                            })
                                        }
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m: 1, minWidth: 150 }} size="small" >
                                    <Select
                                        value={selectRole}
                                        onChange={onRoleSelect}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        style={{ fontSize: '14px' }}
                                    >
                                        <MenuItem value="" style={{ fontSize: '14px' }}>
                                            <em>Select Role</em>
                                        </MenuItem>
                                        <MenuItem value='Student' style={{ fontSize: '14px' }}>Student</MenuItem>
                                        <MenuItem value="Admin" style={{ fontSize: '14px' }}>Admin</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button
                                    variant="contained"
                                    style={{
                                        width: '100px',
                                        height: '40px',
                                        fontSize: '14px',
                                        background: '#8C1515',
                                        fontWeight: 'bold',
                                        marginTop: '5px',
                                        marginLeft: '10px'
                                    }}
                                    onClick={onExport}
                                >
                                    Export
                                </Button>

                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>

                            <Typography
                                sx={{ mt: 0 }}
                                style={{ color: "#000000", fontWeight: "600", fontSize: "14px", marginRight: "10px" }}
                            >
                                Registered Users
                            </Typography>
                            <Checkbox
                                checked={registered}
                                onChange={(event) => handleRegisteredChange(event?.target?.checked)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
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

                    </div>}
                {userManagement === "scavengerHunt" && <ScavengerHuntPage />}
                {userManagement === 'task' && (<TaskManagerForm />)}
                {userManagement === 'registerUser' && (<UserRegister />)}
            </div>
            <DialogBox
                open={openDialog}
                onClose={handleDialogClose}
                content={modalContent}
            />

            <DialogBox
                open={openDialogDelete}
                onClose={handleDialogClose}
                content={modalContent1}
            />
            <Loader fullPage loading={isLoading} />
        </div >
    );
}

export default UserManage;