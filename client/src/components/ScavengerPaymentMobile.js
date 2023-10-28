import React, { useEffect, useState } from "react";
import coin from "./img/coin.jpeg";
import cash from "./img/cash.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { notification } from "antd";
import { Loader } from "react-overlay-loader";
import SucessImg from "./img/transaction.png";
import ErrorImg from "./img/error.png";
import { getAllUsers } from '../actions/auth';


export default function ScavengerPayment() {

    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = React.useState([]);
    const [enablePayement, setEnablePayement] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    const allUserData = async () => {
        const userData = await getAllUsers();
        setData(userData?.allUsers);
    }

    const PaymentLinkEnable = () => {

        if (data.length >= 20) {
            setEnablePayement(true);
        }
        else {
            setEnablePayement(false);
        }

    }

    useEffect(() => {
        allUserData();
        PaymentLinkEnable();
    }, [])

    const currentUser = data.filter(current => current._id === user._id);

    return (
        <div id="details">
            <div className="content">
                <div id="details" className="details">
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "80%" }}>
                            <p style={{ marginBottom: "10px" }}>
                                Now that you have registered for the innovation tour, we would
                                like to share optional activity for you to
                            </p>
                            <ul style={{ marginBottom: "10px" }}>
                                <li>Learn about Tokyo Culture</li>
                                <li>Learn about Unique Things available in Japan</li>
                                <li>Learn to get around in Japan</li>
                                <li>Learn to interact with local Citizens</li>
                            </ul>
                            <p style={{ marginBottom: "10px" }}>
                                Entry Fee: $25 (Not including the credit card fees) - non
                                refundable
                            </p>
                            <p style={{ marginBottom: "10px" }}>
                                Max. number of people : 20 (Note if there is not too much
                                interest, we will refund the fees 100%)
                            </p>
                        </div>
                        <div style={{ width: "20%" }}>
                            <img src={cash} alt="500cash" width="80%" />
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div>
                            <p
                                style={{
                                    textAlign: "center",
                                    marginTop: "40px",
                                    marginBottom: "80px",
                                }}
                            >
                                Be the first to find 6 items and win $500!!
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                }}
                                class="mt-3"
                            >
                                <label>Name:</label>
                                <input
                                    name="name"
                                    disabled
                                    value={currentUser[0]?.scavengerHunt?.name}
                                    type="text"
                                    class="form-control"
                                    style={{ width: "40%", marginLeft: "28px" }}
                                    placeholder="please enter name"
                                />
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                }}
                                class="mt-3"
                            >
                                <label>Cohort:</label>
                                <input
                                    name="cohort"
                                    disabled
                                    value={currentUser[0]?.scavengerHunt?.cohort}
                                    type="text"
                                    class="form-control"
                                    style={{ width: "40%", marginLeft: "20px" }}
                                    placeholder="please enter cohort"
                                />
                            </div>

                            {/* <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                }}
                                class="mt-3"
                            >
                                <label>Payment Status:</label>
                                {user?.scavengerHunt?.isPayment === true ? <div style={{ marginLeft: "40px" }}> <img src={SucessImg} width="50px" height="50px"></img> </div> : <div style={{ width: "180px", marginLeft: "40px" }}><img src={ErrorImg} width="50px" height="50px"></img></div>}
                            </div> */}

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                }}
                            >
                                {!enablePayement && <Button
                                    variant="contained"
                                    style={{
                                        opacity: !enablePayement ? 0.5 : 1,
                                        padding: "5px 40px",
                                        margin: "auto",
                                        marginTop: "60px",
                                        marginBottom: "60px",
                                        border: "1px solid #8c1515",
                                        color: "#8c1515",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        borderRadius: "8px",
                                        textAlign: "center",
                                    }}
                                    onClick={""}
                                    disabled={!enablePayement}
                                >
                                    Payment Link
                                </Button>}
                            </div>
                            {!enablePayement &&
                                (<p>The payment link will be opened once 20 users have registered.</p>)
                            }
                        </div>
                    </div>
                    <div style={{ marginTop: "15px", textAlign: "center" }}>
                        <img src={coin} alt="coin" width="90%" height="90%" />
                    </div>
                </div>
            </div>
            <Loader fullPage loading={isLoading} />
        </div>
    );
}
