import React, { useState } from "react";
import ScheduleForm from "./ScheduleForm";
import { useNavigate } from "react-router-dom";
import img27 from "./img/27.jpeg";
import chart1 from "./img/chart1.png"
import chart2 from "./img/chart2.png"
import woman28 from "./img/woman28.jpeg";
import user from "./img/user.png";
import ispace from "./img/ispace.jpeg";
import man from "./img/man.png";
import man2 from "./img/man2.jpeg";
import last29 from "./img/last29.png"
import lunch from "./img/lunch.png"
import sega from "./img/sega.jpeg"
import inm from "./img/inm.jpeg"
import teamlab from "./img/teamlab.jpeg"
import sawson from "./img/sawson.jpeg"
import sap from "./img/sap.jpeg"
import mori from "./img/mori.jpeg"
import wamazing from "./img/wamazing.png"
import japan from "./img/japan.jpeg"
const daysArray = [
    'DAY 1 \nWednesday \nSep 27th',
    `DAY 2 \nThursday \nSep 28th`,
    `DAY 3 \nFriday \nSep 29th`,
    `DAY 4 \nSaturday \nSep 30th`
];

const dummyData = [
    {
        type: 'Business & Innovation',
        description: '',
        day: 0,
        extraDetail: [
            {
                imageUrl: [img27],
                reservedBy: "Reserved by Chika Kimura",
                title: "Meet and Greet 19.00-21.00 (All LEADers) ** CÉ LA VI TOKYO",
                link: "https://www.celavi.com/en/tokyo/",
                name: "Japanese Culture Salon BIMON",
                address: "1-2-3 Dogenzaka, Shibuya-ku, Tokyo Tokyu Plaza Shibuya 18th floors",
            }
        ],
        extraDetails: true
    },
    {
        type: 'Cuisine',
        description: 'Welcome Drink \nDinner',
        day: 0,
    },
    {
        type: 'Business & Innovation',
        description: 'Company session /visit Innovation base visit University VC session',
        day: 1,
        extraDetail: [
            {
                imageUrl: [woman28],
                venue: "Akasaka City Conference 401",
                title: "Conference9.00- 13.00(All LEADers) **",
                agenda: {
                    name: "Agenda",
                    list: ["15minutes–Welcome – LEAD Innovation Committee",
                        "15 minutes – Sponsor speech by Saison / HULFT",
                        "60 minutes – Self introduction",
                        "60minutes–Keynote speech(TBD: Yoko Ishikura Professor Emeritus, Digital Agency Japan)",
                        "60 minutes - Lunch",
                        "Organizer–TBD"
                    ]
                },
                address: "Akasaka Intercity AIR, 1-8-1 Akasaka, Minato-ku, Tokyo",
            },
            {
                imageUrl: [wamazing, japan],
                venue: "Akasaka City Conference 401",
                title: "Conference13.00 – 17.00 (Group A) **",
                agenda: {
                    name: "Agenda",
                    list: ["13.00 – 13.45 – Daikin (Confirming)",
                        "14.00 – 14.45 – Wamazing (Confirmed)",
                        "15.00 – 15.45 – Deepti & Startup (Confirming)",
                        "16.00 – 16.45 –Japan Hydrogen Association (Confirmed)",
                        "17.00 – 17.45 – SONY (Confirming)",
                    ]
                },
                address: "Akasaka Intercity AIR, 1-8-1 Akasaka, Minato-ku, Tokyo",
            },
            {
                imageUrl: [inm],
                venue: "",
                title: "CompanyVisit1-IBM14.00-16.30 (Group B) - Confirmed",
                agenda: {
                    name: "Agenda",
                    list: ["Innovation",
                        "Organizer – Naomi Hanada Ito",
                    ]
                },
                address: "19-21 Nihonbashi-Hakozaki-cho, Chuo-ku, Tokyo",
            },
            {
                imageUrl: [sega],
                venue: "",
                title: "CompanyVisit2-SEGA14.00-16.30 (Group C) Confirming",
                agenda: {
                    name: "Agenda",
                    list: ["Innovation",
                        "Organizer – Kunihiko Takei",
                    ]
                },
                address: "Address: TBD",
            },
            {
                imageUrl: [lunch],
                venue: "KIGI Tokyo",
                title: "Dinner and networking 18.00 - 21.00  **",
                agenda: {
                    name: "Agenda",
                    list: ["Tea Ceremony ",
                        "Organizer – Saison Information Systems/HULFT", "Reserved by Masa Maruyama"
                    ]
                },
                address: "Address: 2-10-2 Nagatacho, Chiyoda-ku, Tokyo",
            },
        ],
        extraDetails: true
    },
    {
        type: 'Business & Innovation',
        description: '',
        day: 3,
        extraDetail: [
            {
                imageUrl: [chart2, chart1],
            }
        ],
        extraDetails: true
    },
    {
        type: 'Culture',
        description: 'Morning Meditation \nKimino & Japanese Tea Ceremony',
        day: 1,
        isLink: true,
    },
    {
        type: 'Cuisine',
        description: 'Lunch \n Dinner',
        day: 1,
    },
    {
        type: 'Business & Innovation',
        description: 'Company session /visit',
        day: 2,
        extraDetail: [
            {
                imageUrl: [man2, man, ispace],
                venue: "Akasaka City Conference 401",
                title: "Conference9.00 – 13.00 (Group D) **",
                agenda: {
                    name: "Agenda",
                    list: [`9.00 – 9.45 – Ailis,M.D., Founder & CEO, ShoOkiyama(Confirmed)
We are developing an Artificial Intelligence(AI) technology related medical device for medical institutions and doctors.
We are working towards the realization of a new form of medical care using AI technology to allow doctors to apply the "professional technique" that master physician possess in their examination.
`,
                        `10.00 – 10.45 – PowerX, Director, President & CEO, Masahiro Ito (Confirmed)
	Accelerating the adoption of renewable energy
To accelerate the world’s transition to a decarbonized future, Power X willinvent, design, and build energy solutions for storing, transporting, and using renewables.
`,
                        "11.00 – 11.45 – iSpace (Confirmed)",
                        "12.00 – 13.00 – Lunch",
                    ]
                },
                address: "Akasaka Intercity AIR, 1-8-1 Akasaka, Minato-ku, Tokyo",
            }, {
                imageUrl: [sap],
                venue: "",
                title: "CompanyVisit3-SAP9.00-12.00 (Group E) Confirmed",
                subDetails: "Executive speeches, Innovation Lab visit, DT demo(how they helped customer’s’ innovation journey) Lunch(with fee) is optional",
                agenda: {
                    name: "Agenda",
                    list: [`Innovation`,
                        "Organizer – Ana Maria and Naomi Hanada Ito",
                    ]
                },
                address: "TBD",
            }, {
                imageUrl: [user, user],
                venue: "Akasaka City Conference 401",
                title: "Conference13.00 – 18.00 (Group F) **",
                subDetails: "",
                agenda: {
                    name: "Agenda",
                    list: [`13.00 – 13.45 – TBD`,
                        "14.00 – 14.45 – DT Session – Shogakukan, Keio Fintech, UK Blockchain(Confirmed)", "15.00 – 15.45 – SkyDrive (Confirming)", "17.00 – 17.45 – TBD"
                    ]
                },
                address: "Akasaka Intercity AIR, 1-8-1 Akasaka, Minato-ku, Tokyo",
            },
            {
                imageUrl: [teamlab],
                venue: "",
                title: "CompanyVisit4– Team Lab12.30-14.00 (Group G) Confirmed",
                subDetails: "",
                agenda: {
                    name: "Agenda",
                    list: [`Innovation`, "Organizer – Nitin Mehra"
                    ]
                },
                address: "6F Ogawacho Shinko Building, 2-12 Kanda Ogawa-cho, Chiyoda-ku",
            },
            {
                imageUrl: [sawson],
                venue: "",
                title: "CompanyVisit5– Lawson14.00-16.00 (Group H) Confirmed",
                agenda: {
                    name: "Agenda",
                    list: [`Innovation`, "Organizer – Yohei Ito"
                    ]
                },
                address: "6F Ogawacho Shinko Building, 2-12 Kanda Ogawa-cho, Chiyoda-ku",
            }, {
                imageUrl: [mori],
                venue: "",
                title: "CompanyVisit6–Mori Building13.00-16.00 (Group I) Confirmed",
                subDetails: "",
                agenda: {
                    name: "Agenda",
                    list: [`Innovation`, "Organizer – Reina Matsumoto"
                    ]
                },
                address: "Address: TBD",
            }, {
                imageUrl: [last29],
                venue: "",
                title: "Wrap-upandclosingremarks-17.00-18.00",
                agenda: {
                    name: "",
                    list: [`Co-hosts: SofiyaTotevaandSandeepPadhye`
                    ]
                },
                address: "5 Chome-8-5 Minamiaoyama, Minato City, Tokyo",
            },
            {
                imageUrl: [last29],
                venue: "",
                title: "Dinnerandnetworking19.00-21.00**",
                agenda: {
                    name: "",
                    list: [`Organizer–Chika Kimura`
                    ]
                },
                address: "5 Chome-8-5 Minamiaoyama, Minato City, Tokyo",
            }
        ],
        extraDetails: true
    },
    {
        type: 'Business & Innovation',
        description: '',
        day: 3,

    },
    {
        type: 'Cuisine',
        description: 'Lunch \nDinner',
        day: 2,
    },
    {
        type: 'Fun !',
        description: `
        Morning Run \nNight Base ball game`,
        day: 2,
    },
    {
        type: 'Business',
        description: 'Company session /visit',
        day: 3,
    },
    {
        type: 'Fun !',
        description: `Optional Activities`,
        day: 3,
    },


]

const Schedule = () => {

    const navigate = useNavigate();

    const [showScheduleModel, setShowScheduleModel] = useState(false);
    const [taskIndex, setTaskIndex] = useState(0);
    const [title, setTitle] = useState('');
    const [tasks, setTasks] = useState([
        {
            date: new Date().toISOString().slice(0, 10),
            category: 'business',
            price: '',
            description: '',
        },
    ])

    const color = ["#9dc6e9", "#6fa8dd", "#3e85c7", "#ffab40"]

    const handleOpenScheduleModel = () => {
        setShowScheduleModel(true);
    }

    const onDateChange = (event, type) => {
        const findIndex = tasks?.findIndex(
            current => current?.date === event.target.value &&
                current.category === type);
        if (findIndex > -1) {
            setTaskIndex(findIndex);
        } else {
            const updatedTasks = [...tasks];
            updatedTasks.push({
                date: event.target.value,
                category: type,
                price: '',
                description: '',
            });
            setTasks(updatedTasks);
            setTaskIndex(updatedTasks.length - 1);
        }
    }

    const onDescriptionUpdate = (event) => {
        const value = event.target.value;
        let updatedTasks = tasks?.map((current, index) => {
            if (index === taskIndex) {
                return {
                    ...current,
                    description: value,
                }
            }
            return current;
        })
        setTasks(updatedTasks);
    }

    const onPriceUpdate = (event) => {
        const value = event.target.value;
        let updatedTasks = tasks?.map((current, index) => {
            if (index === taskIndex) {
                return {
                    ...current,
                    price: value,
                }
            }
            return current;
        });
        setTasks(updatedTasks);
    }

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const onTypeChange = (event, date) => {
        const findIndex = tasks?.findIndex(
            current => current?.date === date &&
                current.category === event.target.value);
        if (findIndex > -1) {
            setTaskIndex(findIndex);
        } else {
            const updatedTasks = [...tasks];
            updatedTasks.push({
                date: date,
                category: event.target.value,
                price: '',
                description: '',
            });
            setTasks(updatedTasks);
            setTaskIndex(updatedTasks.length - 1);
        }
    }

    const handleSubmitSchedule = () => {
        setShowScheduleModel(false)
    }

    const handleCancel = () => {
        setShowScheduleModel(false)
    }

    const TeaPage = () => { navigate("/tea-ceremony") };

    return (
        <>
            <div id="schedule-container">
                <div className="content">
                    <div className="schedule-header">
                        <h1>Schedule</h1>
                        <span><h2>STANFORD GSB LEAD</h2>Innovation Tour 2023</span>
                    </div>
                    <div className="schedule-btn">
                        <button className="btn-schedule-model" onClick={handleOpenScheduleModel}>Create or Update Schedule</button>
                    </div>
                    <div className="main-container">
                        <div className="schedule-content">
                            <div className="row-1">
                                <div className="col-1"></div>
                                <div style={{ whiteSpace: 'break-spaces' }} className="col-1 day1">{daysArray[0]}</div>
                                <div style={{ whiteSpace: 'break-spaces' }} className="col-1 day1">{daysArray[1]}</div>
                                <div style={{ whiteSpace: 'break-spaces' }} className="col-1 day1">{daysArray[2]}</div>
                                <div style={{ whiteSpace: 'break-spaces' }} className="col-1 day1">{daysArray[3]}</div>
                            </div>
                        </div>
                        {
                            ["Business & Innovation", "Culture", "Cuisine", "Fun !"].map((data, index) => {
                                return (
                                    <div className="schedule-content">
                                        <div className="row-2">
                                            <div className="col-2 type"><div style={{ background: `${color[index]}`, fontWeight: '700', fontFamily: 'sans-serif' }} className="model-type">{data}</div>{(index !== 0) && (index !== 2) && "* optional"}</div>
                                            {[0, 1, 2, 3].map((curr) => {
                                                return (
                                                    <div className="col-2 content-Wrapper">
                                                        <div style={{
                                                            whiteSpace: "pre",
                                                            // lineHeight: "1.5rem",
                                                            fontWeight: 'bold'
                                                        }} className="col-div">
                                                            <div style={{ whiteSpace: 'break-spaces', fontWeight: "700" }} className="col-div" >
                                                                {dummyData?.find(dummCur => dummCur?.type === data && dummCur?.day === curr)?.isLink ?
                                                                    <span
                                                                        onClick={TeaPage}
                                                                        style={{
                                                                            cursor: 'pointer',
                                                                            textDecoration: "underline"
                                                                        }}
                                                                    >
                                                                        {dummyData?.find(dummCur => dummCur?.type === data && dummCur?.day === curr)?.description}
                                                                    </span> :
                                                                    dummyData?.find(dummCur => dummCur?.type === data && dummCur?.day === curr)?.description
                                                                }
                                                            </div>

                                                        </div>
                                                        {
                                                            dummyData?.find(dummCur => dummCur?.type === data && dummCur?.day === curr)?.extraDetail?.map((details) => {
                                                                return (
                                                                    <div className="details_container">
                                                                        {details?.imageUrl?.map((img => {
                                                                            return (
                                                                                <img className="details_img" src={img} height={180} alt="" />
                                                                            )
                                                                        }))}
                                                                        <div className="details_wrapper">
                                                                            <div className="details_title" >{details?.title}</div>
                                                                            <div className="details_subDetails" >{details?.subDetails}</div>
                                                                            <a className="details_link" href={details?.link} >{details?.link}</a>
                                                                            <div className="details_ven">{details?.venue}</div>
                                                                            <div className="details_add">{details?.address}</div>
                                                                            <div className="details_reserved">{details?.reservedBy}</div>
                                                                            <div className="details_name"> {details?.name}</div>

                                                                            {details.agenda?.name === "Agenda" &&
                                                                                <div>
                                                                                    <h4>Agenda</h4>
                                                                                    <ul>
                                                                                        {details.agenda?.list.map((li) => <li>{li}</li>)}
                                                                                    </ul>
                                                                                </div>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                        {/* <div style={{ color: "red" }}>{[1].map((data) => {
                                                            return (
                                                                <div style={{ fontSize: "1.3rem" }}>USD 40-50</div>
                                                            )
                                                        })}</div> */}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
            {showScheduleModel &&
                <ScheduleForm
                    title={title}
                    handleSubmitSchedule={handleSubmitSchedule}
                    scheduleData={tasks[taskIndex]}
                    handleCancel={handleCancel}
                    onDateChange={onDateChange}
                    onDescriptionUpdate={onDescriptionUpdate}
                    onPriceUpdate={onPriceUpdate}
                    onTitleChange={onTitleChange}
                    onTypeChange={onTypeChange}
                />
            }
        </>
    );
};

export default Schedule;
