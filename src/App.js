import React from "react";
import "./App.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

let bb = [

  { cobdate: "2022-06-27", currency: "JPY", quantity: 1, status: " Not Authorized" },
  { cobdate: "2022-06-27", currency: "JPY", quantity: 15, status: " Pending GS" },
  { cobdate: "2022-06-27", currency: "JPY", quantity: 20, status: " Pending Client" },
  { cobdate: "2022-06-27", currency: "JPY", quantity: 1, status: "Completed" },
  { cobdate: "2022-06-27", currency: "EUR", quantity: 3, status: " Not Authorized" },
  { cobdate: "2022-06-27", currency: "EUR", quantity: 8, status: " Pending GS" },
  { cobdate: "2022-06-27", currency: "EUR", quantity: 12, status: " Pending Client" },
  { cobdate: "2022-06-27", currency: "EUR", quantity: 1, status: "Completed" },
];

// bb = bb.map (c => c.TokenId);

// console.log("ddss",bb);

let curr = removeDuplicates(bb.map((c) => c.currency));

let status = removeDuplicates(bb.map((c) => c.status)) || [];

function App() {

  return (
    <main>
      <div style={{}}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {status.map((c) => (
                  <TableCell align="right">{c}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {curr.map((row) => (
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                  {status.map((dd) => {
                    let bbb = bb.filter(cc => cc.currency === row && cc.status === dd);
                    return (
                        <TableCell component="th" scope="row">
                          {bbb[0] && bbb[0].quantity}
                        </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
}

export default App;
