import { useState } from 'react';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Filter from '../Filter/Filter';
 

const columns = [
  { id: 'date', label: 'Date', minWidth: 120 },
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'description', label: 'Description', minWidth: 250 },
  {
    id: 'price',
    label: 'Price',
    minWidth: 120,
    align: 'right',
    format: (value) => {
      const numValue = Number(value);
      return isNaN(numValue) ? '$0.00' : `$${numValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    },
  },
];

export default function TableData({ expenses }) { 
  const [page, setPage] = React.useState(0); 
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

   const [selectedYear, setSelectedYear] = useState("All");
  
    // getting year from child
    function handleFilterChange(year) {
      setSelectedYear(year);
    }

    // apply filter on year
  const filterByYear = expenses.filter((val) => {
    if (selectedYear === "All") return true;

    const year = new Date(val.date).getFullYear().toString();
    return selectedYear === year;
  }); 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '90%', borderRadius: '12px', overflow: 'hidden', border: '1px solid #E5E7EB', mt: 7,mb:10 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            {/* Header Title Row */}
            <TableRow>
              <TableCell
                colSpan={4}
                sx={{
                  position: 'sticky',
                  top: 0,
                  zIndex: 11,
                  backgroundColor: '#FFFFFF',
                  borderBottom: '1px solid #E5E7EB',
                  py: 2,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', px: 1 , py: 0}}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#111827' }}>
                    Recent Activity
                  </Typography>
                  <Filter filterByYear={filterByYear} onYearSelect={handleFilterChange}/>
                </Box>
              </TableCell>
            </TableRow>
            
            {/* Column Headings Row */}
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{ 
                    fontWeight: 'bold',
                    backgroundColor: '#F9FAFB', 
                    color: '#374151',
                    position: 'sticky',
                    top: '99px', // Sits properly below the title row on scroll
                    zIndex: 10,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          
          <TableBody>
            {/* 1. Using live dynamic prop data instead of the static 'rows' array */}
            {filterByYear.length > 0 ? (
              filterByYear
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id || index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align} sx={{ color: '#4B5563' }}>
                            {  (column.id === 'price')
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
            ) : (
              /* Display a clean placeholder row if no data exists yet */
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 4, color: '#9CA3AF' }}>
                  No expenses added yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
      {/* 2. Updated data source count for live pagination tracking */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filterByYear.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}