 

import React from 'react';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

export default function DownloadButton({ filterByYear }) {
  
  const handleDownload = () => {
    // 1. Safeguard against empty data
    if (!filterByYear || filterByYear.length === 0) {
      alert("No data available to download!");
      return;
    }

    // 2. Define headers for the Excel/CSV spreadsheet format
    const headers = ["Date", "Title", "Description", "Price ($)"];
    
    // 3. Map your array data into rows wrapped cleanly in quotes (prevents comma spacing glitches)
    const csvRows = filterByYear.map(item => [
      `"${item.date || ''}"`,
      `"${item.title || ''}"`,
      `"${item.description || ''}"`,
      item.price
    ]);

    // 4. Combine headers and array rows separated by clean line breaks
    const csvContent = [
      headers.join("\t\t"), 
      ...csvRows.map(row => row.join(","))
    ].join("\n");
    
    // 5. Package data into a downloadable Text/CSV Blob 
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    
    // 6. Create a virtual web URL pointing to that data blob structure
    const url = URL.createObjectURL(blob);
    
    // 7. Create a hidden dummy link element, click it, and clear it from memory
    const link = document.createElement("a");
    link.href = url;
    link.download = "Expenses_Report.csv"; // The name of the downloaded file
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Frees browser memory cache
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownload}
      startIcon={<DownloadIcon />}
      sx={{ 
        bgcolor: '#374151', 
        m: 1, 
        fontWeight: 700, 
        height: 50,
        textTransform: 'none',
        borderRadius: '8px',
        px: 3,
        '&:hover': { bgcolor: '#111827' } 
      }}
    >
      Download Report
    </Button>
  );
}