import React from "react";
import hotel1 from "./img/hotel1.png";
import hotel2 from "./img/hotel2.png";
import hotels3 from "./img/hotels3.png";
import hotel4 from "./img/hotel4.png";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: "bold",
    width: "300px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const columns = [
  {},
  { id: "Hotel", label: "Hotel", minWidth: 170 },
  {
    id: "Price per Night (JYP)",
    label: "Price per Night (JYP)",
    minWidth: 170,
  },
  {
    id: "Price per Night (EUR)",
    label: "Price per Night (EUR)",
    minWidth: 170,
  },
  {
    id: "Price per Night (US Dollars)",
    label: "Price per Night (US Dollars)",
    minWidth: 170,
  },
  {
    id: "Hotel Website",
    label: "Hotel Website",
    minWidth: 170,
  },
];

const rows = [
  {
    image: hotel1,
    hotel: "Viainn Hotel",
    fees1: "¥14,000.00",
    fees2: "€96.99",
    fees3: "$105.45",
    website: "https://www.viainn.com/akasaka/",
    type: "single",
  },
  {
    image: hotel2,
    hotel: "Henna Hotel",
    fees1: "¥8,000.00",
    fees2: "€55.42",
    fees3: "$69.26",
    website:
      "https://www.hennnahotel.com/akasaka/?gad=1&gclid=CjwKCAjw9J2iBhBPEiwAErwpeSC9yAEZc1TVEscwT2yX4d7EYg5RvnSxlroIbYD1q39ICnw31msZ7hoCMIQQAvD_BwE",
    type: "single",
  },
  {
    image: hotels3,
    hotel: "APA HOTEL PRIDE〈KOKKAIGIJIDOMAE〉National Diet Bldg",
    fees1: "¥31,000.00",
    fees2: "€206.31",
    fees3: "$222.37",
    website: "https://www3.apahotel.com/hotel/syutoken/tokyo/kokkaigijidomae/",
    type: "single",
  },
  {
    image: hotel4,
    hotel: "Hilton Tokyo",
    fees1: "¥47186 (Original rate 64,836)",
    fees2: "€326.90",
    fees3: "$355.40",
    website:
      "https://www.hilton.com/en/attend-my-event/stanford-alumni-second-innovation-tour/",
    type: "single",
  },
];

const LogisticHotelTable = (props) => {
  return (
    <TableContainer
      component={Paper}
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{
                  minWidth: column.minWidth,
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
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
                <img
                  src={row.image}
                  style={{ width: "200px", height: "150px" }}
                  alt="img"
                ></img>
              </StyledTableCell>
              <StyledTableCell align="left">{row.hotel}</StyledTableCell>
              <StyledTableCell align="left">{row.fees1}</StyledTableCell>
              <StyledTableCell align="left">{row.fees2}</StyledTableCell>
              <StyledTableCell align="left">{row.fees3}</StyledTableCell>
              <StyledTableCell
                style={{ maxWidth: "170px", wordWrap: "break-word" }}
                align="left"
              >
                <a href={row.website} target="_blank" rel="noreferrer">
                  Click for more details
                </a>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LogisticHotelTable;
