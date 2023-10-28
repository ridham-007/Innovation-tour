import React from "react";
import hotel5 from "./img/hotel5.png";
import hotel6 from "./img/hotel6.png";
import hotel7 from "./img/hotel7.png";
import hotel8 from "./img/hotel8.png";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 18,
        fontWeight: 'bold',
        width: '300px'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const columns = [
    {},
    { id: 'Hotel', label: 'Hotel', minWidth: 170 },
    { id: 'Price per Night (JYP)', label: 'Price per Night (JYP)', minWidth: 170 },
    {
        id: 'Price per Night (EUR)',
        label: 'Price per Night (EUR)',
        minWidth: 170,
    },
    {
        id: 'Price per Night (US Dollars)',
        label: 'Price per Night (US Dollars)',
        minWidth: 170,
    },
    {
        id: 'Hotel Website',
        label: 'Hotel Website',
        minWidth: 170,
    },
];

const rows = [
    {
        image: hotel5,
        hotel: 'New Hotel Otani',
        fees1: '¥40,000.00',
        fees2: '€277.12',
        fees3: '$301.28',
        website: 'https://www.newotani.co.jp/en/tokyo/',
        type: 'double'
    },
    {
        image: hotel6,
        hotel: 'MIMARU Tokyo Akasaka',
        fees1: '¥33,000.00',
        fees2: '€228.62',
        fees3: '$248.56',
        website: 'https://mimaruhotels.com/en/hotel/akasaka/?utm_source=google&utm_medium=cpc&utm_campaign=areabrandtokyo&utm_content=JP&utm_content=Brand&utm_content=Brand_Tokyo_Akasaka&gclid=CjwKCAjwuqiiBhBtEiwATgvixHJJErqr24DaRUB4jy44x0Qwvn-51THVk7JlPSNQgv0n4BIDwDcIgRoC-2QQAvD_BwE',
        type: 'double'
    },
    {
        image: hotel7,
        hotel: 'ANA Intercontinental Hotel',
        fees1: '¥58,000.00',
        fees2: '€401.82',
        fees3: '$436.86',
        website: 'https://anaintercontinental-tokyo.jp/en/',
        type: 'double'
    },
    {
        image: hotel8,
        hotel: 'Hilton Tokyo',
        fees1: '¥53,352 (Original rate 68,765)',
        fees2: '€369.62',
        fees3: '$401.85',
        website: 'https://www.hilton.com/en/attend-my-event/stanford-alumni-second-innovation-tour/',
        type: 'double'
    },
];


const LogisticHotelTable1 = (props) => {

    return (
        <TableContainer component={Paper} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth, fontSize: '16px', fontWeight: 'bold' }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                <img src={row.image} style={{ width: '200px', height: '150px' }} alt="img"></img>
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.hotel}</StyledTableCell>
                            <StyledTableCell align="left">{row.fees1}</StyledTableCell>
                            <StyledTableCell align="left">{row.fees2}</StyledTableCell>
                            <StyledTableCell align="left">{row.fees3}</StyledTableCell>
                            <StyledTableCell
                                style={{ maxWidth: '170px', wordWrap: 'break-word' }}
                                align="left"><a href={row.website} target="_blank" rel="noreferrer">Click for more details</a></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LogisticHotelTable1;
