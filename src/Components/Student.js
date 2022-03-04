import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, Age, Course, Batch, Change) {
  return { name, Age, Course, Batch, Change};
}

const rows = [
  createData('John', 24, 'MERN', 'October', 'Edit'),
  createData('Doe', 25, 'MERN', 'November', 'Edit'),
  createData('Biden', 26, 'MERN', 'September', 'Edit' ),
  createData('Barar', 22, 'MERN', 'September', 'Edit'),
  createData('Christ', 23, 'MERN', 'October', 'Edit'),
  createData('Elent', 24, 'MERN', 'November', 'Edit'),
];

export default function BasicTable() {
  return (
      <>
      <div className='content'>Student Details✍</div>
      <button className='btn'>Add New Student</button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right">{row.Change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}