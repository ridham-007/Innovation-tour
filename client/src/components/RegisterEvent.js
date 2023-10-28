import React, { useEffect, useState } from "react";
import { Loader } from "react-overlay-loader";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../actions/auth";
import { TextField } from "@mui/material";
import { updateUser } from "../actions/auth";
import { notification } from "antd";


const BottomLine = styled.div`
    width: 100%;
    height: 0.9px;
    margin-top: 10px;
    border: 1px solid #C4CFD4;
`;

const ModelHeader = styled.div`
    display: flex;
    justify-content: center;
`;

const stylediv = {
    bgcolor: "background.paper",
    width: '100%',
    maxWidth: '700px',
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "2%",
    margin: 'auto',
    padding: '24px',
};

const RegisterEvent = () => {
    const [cetTime, setCetTime] = useState('');
    const [pdtTime, setPdtTime] = useState('');
    const [jstTime, setJstTime] = useState('');
    const [cetSlotDate, setCETSlotDate] = useState(false);
    const [pdtSlotDate, setPDTSlotDate] = useState(false);
    const [jstSlotDate, setJSTSlotDate] = useState(false);
    const [userData, setUserData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [meal, setMeal] = useState('No Preference');
    let currentBatch = '';
    const batches = ['Central European Time Batch', 'Pacific Daylight Time Batch', 'Japan Standard Time Batch'];
    const [allergy, setAllergy] = useState('');
    
    const allUserData = async () => {
        const userData = await getAllUsers();
        setUserData(userData?.allUsers);
    }

    useEffect(() => {
        allUserData();
    },[])

    const groups = userData?.length > 0 ? userData?.reduce((acc, curr) => {
        const batch = curr.batch;
        if (!acc[batch]) {
            acc[batch] = [];
        }
        if(curr.depositCredited){
            acc[batch].push(curr);
        }
        return acc;
    }, {}) : {};

    const CETCount = groups['Central European Time Batch']?.length || 0;
    const PDTCount = groups['Pacific Daylight Time Batch']?.length || 0;
    const JSTCount = groups['Japan Standard Time Batch']?.length || 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();

            // Central European Time (CET)
            let cetTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
            const cetTargetTime = new Date(cetTime.getFullYear(), cetTime.getMonth(), cetTime.getDate(), 19, 0, 0, 0);
            let cetDiff = cetTargetTime - cetTime;
            const targetDate = new Date('2023-05-13');

            if (cetTime.toLocaleDateString() === targetDate.toLocaleDateString()){
                cetDiff += 24 * 60 * 60 * 1000;
                cetTime = new Date(cetTime.getTime() + 24 * 60 * 60 * 1000);
            }
            if (cetTime.getDay() === 0){
                setCetTime(cetDiff + 24 * 60 * 60 * 1000);
                const nextDay = new Date(cetTime.getTime() + 24 * 60 * 60 * 1000);
                setCETSlotDate(nextDay.toLocaleDateString())
            } else {
                setCetTime(cetDiff);
                setCETSlotDate(cetTime.toLocaleDateString())
            }

            // Pacific Daylight Time (PDT)
            let pdtTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
            const pdtTargetTime = new Date(pdtTime.getFullYear(), pdtTime.getMonth(), pdtTime.getDate(), 19, 0, 0, 0);
            let pdtDiff = pdtTargetTime - pdtTime;
            if (pdtTime.toLocaleDateString() === targetDate.toLocaleDateString()) {
                pdtDiff += 24 * 60 * 60 * 1000;
                pdtTime = new Date(pdtTime.getTime() + 24 * 60 * 60 * 1000);
            }
            if (pdtTime.getDay() === 0) {
                setPdtTime(pdtDiff + 24 * 60 * 60 * 1000);
                const nextDay = new Date(pdtTime.getTime() + 24 * 60 * 60 * 1000);
                setPDTSlotDate(nextDay.toLocaleDateString())
            } else {
                setPdtTime(pdtDiff);
                setPDTSlotDate(pdtTime.toLocaleDateString())
            }

            // Japan Standard Time (JST)
            let jstTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
            const jstTargetTime = new Date(jstTime.getFullYear(), jstTime.getMonth(), jstTime.getDate(), 19, 0, 0, 0);
            let jstDiff = jstTargetTime - jstTime;

            if (jstTime.toLocaleDateString() === targetDate.toLocaleDateString()) {
                jstDiff += 24 * 60 * 60 * 1000;
                jstTime = new Date(jstTime.getTime() + 24 * 60 * 60 * 1000);
            }
            if (jstTime.getDay() === 0) {
                setJstTime(jstDiff + 24 * 60 * 60 * 1000);
                const nextDay = new Date(jstTime.getTime() + 24 * 60 * 60 * 1000);
                setJSTSlotDate(nextDay.toLocaleDateString())
            } else {
                setJstTime(jstDiff);
                setJSTSlotDate(jstTime.toLocaleDateString())
            }
            setTimeout(() => {
                setLoading(false);
            }, 300)
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
            
    let errorMessage = '';
    let message = '';

    const remainingCETHours = Math.floor(cetTime / (60 * 60 * 1000));
    const remainingCETMinutes = Math.floor((cetTime % (60 * 60 * 1000)) / (60 * 1000));
    const remainingCETSeconds = Math.floor((cetTime % (60 * 1000)) / 1000);
    const remainingPDTHours = Math.floor(pdtTime / (60 * 60 * 1000));
    const remainingPDTMinutes = Math.floor((pdtTime % (60 * 60 * 1000)) / (60 * 1000));
    const remainingPDTSeconds = Math.floor((pdtTime % (60 * 1000)) / 1000);
    const remainingJSTHours = Math.floor(jstTime / (60 * 60 * 1000));
    const remainingJSTMinutes = Math.floor((jstTime % (60 * 60 * 1000)) / (60 * 1000));
    const remainingJSTSeconds = Math.floor((jstTime % (60 * 1000)) / 1000);
    let allFull = true;
    if (CETCount < 20 ){
        allFull = false;
        if(cetTime <= 0 ){
            message = 'Slot is open, You can register now.';
            currentBatch = batches[0];
        } else {
            errorMessage = "Slot will open at Central European Time 7:00 PM";
    }
    }
    if(PDTCount < 20) {
        allFull = false;
        if (pdtTime <= 0) {
            message = 'Slot is open, You can register now.';
            currentBatch = batches[1];
        } else {
            errorMessage = "Slot will open at Pacific Daylight Time 7:00 PM";
        }
    }
    if (JSTCount < 20) {
        allFull = false;
        if (jstTime <= 0 ) {
            message = 'Slot is open, You can register now.';
            currentBatch = batches[2];
        } else {
            errorMessage = "Slot will open at Japan Standard Time 7:00 PM";
        }
    } 
    if (allFull) {
        errorMessage = "All batches are full."
    }

    const [data, setData] = React.useState([]);
    const navigate = useNavigate();

    const getUserDetail = async () => {
        const userData = await JSON.parse(localStorage.getItem('user'));
        setAllergy(userData.allergy);
        setMeal(userData.mealPreference);
        setData(userData);
    }
    useEffect(() => {
        getUserDetail();
    }, [])

    const getMessageComponent = (time, hours, minutes, seconds, slotCount, slotdate) => {
        if (slotCount >= 20){
            return "Slots are full for this time Zone";
        } else if(time <= 0){
            return message;
        } else {
            return <>Your registration slot opens in <strong>{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</strong> hours on < strong > {slotdate}</strong ></>
        }
    }

    const onSubmit = async () => {
        setLoading(true);
        const response = await updateUser({
            user: {
                name: data.name,
                email: data.email,
                phonenumber: data.phonenumber,
                role: data.role,
                country: data.country,
                address: data.address,
                batch: batches.includes(data.batch) ? data.batch : currentBatch,
                depositCredited: data.depositCredited,
                isRegistered: true,
                allergy: allergy,
                mealPreference: meal,
            },
            id: data._id,
        });
        setLoading(false);
        notification.open({
            message: "Success!",
            description: response.msg,
        });
        if(response.success){
            navigate("/deposit");
        }
    }

    const registeredUsers = userData?.length > 0 ? userData?.filter(curUser => curUser?.isRegistered) : [];
    const disalbeRegistration = registeredUsers?.length >= 58;
    return (
        <div id="details">
            <div className="content">
                <div style={stylediv}>
                        <ModelHeader>
                            <Typography
                                variant="h6"
                                component="h2"
                                style={{ color: "#163356", fontSize: "22px", fontWeight: "600" }}
                            >
                            Register For Event
                            </Typography>
                        </ModelHeader>
                        <BottomLine />
                        
                    <div style={{
                        display: 'flex', padding: '10px 0px', alignItems: 'center' }}>
                            <Typography
                            style={{     marginRight: '10px', color: "#000000", marginRight: 10, fontWeight: "600", fontSize: "14px" }}
                            >
                                Name :
                            </Typography>
                            {/* <TextField
                                margin="normal"
                                style={{ width: '70%', marginLeft: '45px' }}
                                id="title"
                                size="small"
                                inputProps={{ style: { fontSize: 14 } }}
                                value={data.name}
                                onChange={(e) => setName(e.target.value)}
                                disabled
                            /> */}
                        <div style={{
                            flexGrow: 1, border: '1px solid lightgrey', borderRadius: '5px', padding: '10px',wordWrap: 'break-word', fontWeight: 'bold', textAlign:'left'}}>
                                {data.name}
                            </div>
                        </div>
                    <div style={{ display: 'flex', padding: '10px 0px', alignItems: 'center' }}>
                            <Typography
                            style={{     marginRight: '10px', color: "#000000", marginRight: 10, fontWeight: "600", fontSize: "14px" }}
                            >
                                Email :
                            </Typography>
                            {/* <TextField
                                margin="normal"
                                style={{ width: '70%', marginLeft: '45px' }}
                                id="title"
                                size="small"
                                inputProps={{ style: { fontSize: 14 } }}
                                value={data.email}
                                onChange={(e) => setEmail(e.target.value)}
                            /> */}
                        <div style={{ flexGrow: 1, border: '1px solid lightgrey', borderRadius: '5px', wordWrap: 'break-word', padding: '10px', fontWeight: 'bold', textAlign: 'left' }}>
                            {data.email}
                        </div>
                        </div>
                    <div style={{
                        display: 'flex', padding: '15px 0px', alignItems: 'center'}}>
                            <Typography
                            style={{     marginRight: '10px', color: "#000000", marginRight: 10, fontWeight: "600", fontSize: "14px" }}
                            >
                                Country :
                            </Typography>
                            {/* <TextField
                                margin="normal"
                                style={{ width: '70%', marginLeft: '30px' }}
                                id="title"
                                size="small"
                                inputProps={{ style: { fontSize: 14 } }}
                                value={data.country}
                                onChange={(e) => setCountryName(e.target.value)}
                            /> */}
                        <div style={{ flexGrow: 1, border: '1px solid lightgrey', borderRadius: '5px', wordWrap: 'break-word', padding: '10px', fontWeight: 'bold', textAlign: 'left' }}>
                            {data.country}
                        </div>
                        </div>
                    <div style={{ display: 'flex', padding: '10px 0px', alignItems: 'center' }}>
                            <Typography
                            style={{ color: "#000000", marginRight: 10, fontWeight: "600", fontSize: "14px" }}
                            >
                                Address :
                            </Typography>
                            {/* <TextField
                                margin="normal"
                                style={{ width: '70%', marginLeft: '30px' }}
                                id="title"
                                size="small"
                                value={data.address}
                                inputProps={{ style: { fontSize: 14 } }}
                                onChange={(e) => setAddress(e.target.value)}
                            /> */}
                        <div style={{ flexGrow: 1, border: '1px solid lightgrey', borderRadius: '5px', wordWrap: 'break-word', padding: '10px', fontWeight: 'bold', textAlign: 'left' }}>
                            {data.address}
                        </div>
                        </div>
                    <div style={{ display: 'flex', padding: '10px 0px', alignItems: 'center' }}>
                            <Typography
                                style={{     marginRight: '10px', color: "#000000", marginRight: 10, fontWeight: "600", fontSize: "14px" }}
                            >
                                Phone :
                            </Typography>
                            {/* <TextField
                                margin="normal"
                                style={{ width: '70%', marginLeft: '45px' }}
                                id="title"
                                size="small"
                                inputProps={{ style: { fontSize: 14 } }}
                                value={data.phonenumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            /> */}
                        <div style={{ flexGrow: 1, border: '1px solid lightgrey', borderRadius: '5px', wordWrap: 'break-word', padding: '10px', fontWeight: 'bold', textAlign: 'left' }}>
                            {data.phonenumber}
                        </div>

                        </div>
                    <div style={{ display: 'flex', padding: '10px 0px', alignItems: 'center' }}>
                        <Typography
                            style={{     marginRight: '10px', color: "#000000", marginRight: 10, fontWeight: "600", fontSize: "14px" }}
                        >
                            Meal Preference :
                        </Typography>
                        <div style={{ flexGrow: 1, wordWrap: 'break-word', padding: '0', fontWeight: 'bold', textAlign: 'left' }}>

                        <select id="country" name="country" onChange={(e) => setMeal(e.target.value)} value={meal} style={{ width: '150px', height: '35px', borderRadius: '5px', paddingLeft: '15px' }}>
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Halal">Halal</option>
                            <option value="No Preference">No Preference</option>
                        </select>
                        </div>
                    </div>
                    <div style={{ display: 'flex', padding: '10px 0px', alignItems: 'center' }}>
                        <Typography
                            style={{ color: "#000000", marginRight: 10, fontWeight: "600", fontSize: "14px" }}
                        >
                            Do you have any allergy? :
                        </Typography>
                        <div style={{ flexGrow: 1, wordWrap: 'break-word', padding: '0', fontWeight: 'bold', textAlign: 'left' }}>

                        <TextField
                                margin="normal"
                                style={{ width: '100%' }}
                                id="title"
                                size="small"
                                inputProps={{ style: { fontSize: 14 } }}
                                value={allergy}
                                onChange={(e) => setAllergy(e.target.value)}
                            />
                            </div>

                    </div>
                    <div style={{
                        border: '2px solid grey',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: 5,
                        borderRadius: 8,
                        marginTop: 10,
                    }}>
                    {disalbeRegistration ?(
                        <div>
                                Thanks for your interest in this tour. Registration is now closed as we have hit maximum number of attendees. If we have any cancellations, we will open this up again.
                        </div>
                    ) : (
                        <div>
                            <p style={{
                                textAlign: 'left',
                            }}><strong>Central European Time : </strong>{getMessageComponent(cetTime, remainingCETHours, remainingCETMinutes, remainingCETSeconds, CETCount, cetSlotDate)}</p>
                            <p style={{
                                textAlign: 'left',
                            }}><strong>Pacific Daylight Time : </strong>{getMessageComponent(pdtTime, remainingPDTHours, remainingPDTMinutes, remainingPDTSeconds, PDTCount, pdtSlotDate)}</p>
                            <p style={{
                                textAlign: 'left',
                            }}><strong>Japan Standard Time : </strong>{getMessageComponent(jstTime, remainingJSTHours, remainingJSTMinutes, remainingJSTSeconds, JSTCount, jstSlotDate)}</p>
                    </div>)}
                    </div>

                    {!disalbeRegistration && (<Button
                            variant="contained"
                            style={{
                                color: 'white',
                                opacity: (message?.length === 0 || disalbeRegistration) ? 0.5 : 1,
                                marginTop: '15px', alignSelf: "center", width: '140px', height: '40px', fontSize: '14px', background: '#8C1515', fontWeight: 'bold'
                            }}
                        onClick={onSubmit}
                        disabled={message?.length === 0 || disalbeRegistration}
                        >
                            Register
                        </Button>)}
                    <Loader fullPage loading={isLoading} />
                </div>
            </div>
        </div>
    );
};

export default RegisterEvent;
