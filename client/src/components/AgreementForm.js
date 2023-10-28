import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from 'antd'
import { updateUser } from "../actions/auth";

const AgreementForm = () => {

    const navigate = useNavigate();

    const [condition, setCondition] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user?.AgreementSigned === true) {
            navigate("/bookMeeting");
        }
    }, [])

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const handleSubmit = async () => {
        if (!condition) {
            notification.open({
                description: "Please select Terms and Condition",
            })
        }
        else {
            const newUser = {
                ...user,
                AgreementSigned: condition,
            };

            const response = await updateUser({
                user: {
                    ...user,
                    AgreementSigned: condition
                },
                id: user._id
            })
            if (response.success) {
                localStorage.setItem("user", JSON.stringify(newUser));
                navigate("/bookMeeting");
            }

        }
    }

    return (
        <div id="details">
            <div className="leadercontent">
                <div
                    style={{
                        display: "flex",
                        margin: 'auto',
                    }}>
                    <div className="agreementWrapper">
                        <p>Subject: Agreement of Liability Waiver for [LEAD Innovation Tour]</p>
                        <p style={{ textAlign: "justify", fontWeight: "bold" }}>
                            Dear {user.name},
                        </p><br></br>
                        <p>
                            We are pleased that you have decided to participate in the upcoming LEAD Innovation Tour organized by {user.name} which will be held from September 28-30 in TokyoAs an important part of ensuring the smooth and safe execution of the event, we require all participants to sign this Liability Waiver Agreement.
                        </p>
                        <br></br>
                        <p>Please read the following provisions carefully:</p>
                        <br></br>
                        <p style={{ textAlign: "justify" }}>
                            1. <span style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>Assumption of Risk:</span> I acknowledge that my participation in the LEAD Innovation Tour involves certain inherent risks, including but not limited to travel-related risks, health and safety risks, and risks associated with attending events and activities. I voluntarily assume all such risks and agree that [Your Name], its organizers, employees, representatives, and agents shall not be held liable for any injury, loss, or damage incurred during the LEAD Innovation Tour.
                        </p>
                        <br></br><br></br>
                        <p style={{ textAlign: "justify" }}>
                            2. <span style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>Personal Responsibility:</span> I understand that I am solely responsible for my personal safety, well-being, and health throughout the duration of the LEAD Innovation Tour. This includes being responsible for my own travel arrangements, accommodation, food choices, and any other personal needs or requirements. I agree to abide by any safety guidelines, instructions, or rules provided by the organizers and to exercise reasonable care to ensure my own safety.
                        </p>
                        <br></br><br></br>
                        <p style={{ textAlign: "justify" }}>
                            3. <span style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>Release of Liability:</span> In consideration of being permitted to participate in the LEAD Innovation Tour, I hereby release {user.name}, its organizers, employees, representatives, and agents from any and all claims, demands, actions, or causes of action arising out of or related to any loss, damage, injury, or death that may occur as a result of my participation in the Innovation Tour.
                            Indemnification: I agree to indemnify and hold harmless LEAD Innovation Tour Organizers, its, representatives, and Sponsoring Companies from any liability, loss, damage, or expense (including legal fees) incurred as a result of any claims, demands, actions, or causes of action brought against them arising from my participation in the LEAD Innovation Tour.

                        </p>
                        <br></br><br></br>
                        <p>Governing Law: This Agreement shall be governed by and construed in accordance with the laws of Japan, without regard to its conflict of laws principles.</p><br></br>
                        <p>I have read this Agreement, understand its content, and voluntarily sign it without any undue pressure or influence. I acknowledge that this Agreement shall be binding upon me, my heirs, executors, administrators, and assigns.</p><br></br>
                        <p>Participant's Full Name: <span style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>{user.name}</span></p><br></br>
                        <p>Participant's Signature: <span style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>---------</span></p><br></br>
                        <p>Date: <span style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>{`${day}-${month}-${year}`}</span></p><br></br>
                        <p>Please return a signed copy of this Agreement to us via email or by mail at the address mentioned above before [deadline for signing]. Should you have any questions or concerns, please feel free to contact us using the provided contact information.</p><br></br>
                        <p>Thank you for your cooperation, and we look forward to your participation in the LEAD Innovation Tour.</p><br></br>
                        <p>Sincerely,</p><br></br>
                        <p>LEADers - Some basic ground rules that we need to follow during the innovation tour to ensure a smooth and respectful experience for everyone involved when we meet company representatives or visit their offices in Tokyo</p><br></br>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontWeight: 'bold' }}>Respectful Behavior:</span> Visitors should be mindful of cultural differences and be respectful of Japanese culture during presentations. This includes being attentive, avoiding interrupting the speaker, and refraining from making culturally insensitive remarks or gestures.
                        </p>
                        <br></br>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontWeight: 'bold' }}>Confidentiality and Photography:</span> No photos or recordings should be taken during the presentation without explicit approval from the hosting company. Confidential and proprietary information might be shared, so it's crucial to respect their intellectual property rights.
                        </p>
                        <br></br>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontWeight: 'bold' }}>Intoxication:</span> Visitors should not consume alcoholic beverages or any intoxicating substances before or during company presentations. Maintaining sobriety ensures clear communication and a professional atmosphere.
                        </p>
                        <br></br>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontWeight: 'bold' }}>Smoking Policy</span> Smoking should only be allowed in designated smoking areas outside of the company premises. It's important to adhere to local regulations and respect the company's smoke-free policies.
                        </p>
                        <br></br>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontWeight: 'bold' }}>Mobile Phones and Devices:</span> During presentations, visitors should set their mobile phones and electronic devices to silent mode or turn them off to avoid disruptions. Texting, talking on the phone, or using electronic devices during presentations should be avoided.
                        </p>
                        <br></br>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontWeight: 'bold' }}>Asking Questions:</span> Encourage everyone to engage actively by asking relevant and thoughtful questions during Q&A sessions or designated interactive segments.
                        </p>
                        <br></br>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontWeight: 'bold' }}>Environmental Responsibility:</span> Visitors should be mindful of environmental sustainability, such as properly disposing of waste and following the company's recycling policies if provided.
                        </p>
                        <br></br>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontWeight: 'bold' }}>Feedback and Gratitude:</span> After each company visit, LEADer should  provide constructive feedback to improve future tours. Expressing gratitude for the opportunity to visit and learn from the companies is also important.
                        </p>
                        <br></br>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "1em", gap: "0.3em", }}>
                            <input type="checkbox" id="check" style={{ display: "flex", margin: '0px', padding: "1em", cursor: "pointer", width: "22px", height: "22px" }} value={condition} onChange={(e) => setCondition(e.target.checked)} />
                            <label htmlFor="check" style={{ marginBottom: "0em", cursor: "pointer", fontSize: "18px" }}>I agree to adhere to these terms during the innovation tour</label>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgreementForm;
