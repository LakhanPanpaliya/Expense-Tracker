import * as React from 'react';
import { Box, Paper, Typography, Stack } from '@mui/material';

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import HistoryIcon from '@mui/icons-material/History';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import './Cards.css';

export default function DashboardStatsRow({totalExpenses,entries}) {
 
  const stats = [
  {
    title: 'Total Expenses',
    amount: `$${totalExpenses}`, 
    icon: <PriceChangeIcon sx={{ fontSize: 60, color: '#bb1c1c' }} />,
  },
  {
    title: 'Total Transactions',
    amount: `${entries}`, 
    icon: <HistoryIcon sx={{ fontSize: 60, color: '#757575' }} />,
  },
  {
    title: 'Total Income',
    amount: '$8,500.00',
    icon: <AccountBalanceIcon sx={{ fontSize: 60, color: '#2E7D32' }} />,
  },
  {
    title: 'Remaining Balance',
    amount: '$5,259.85', 
    icon: <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 60, color: '#757575' }} />,
  },
];

  return (
    <Box className = "card-box" sx={{ maxWidth: '100%', p: 0, backgroundColor: '#F9FAFB' }}>
      <Stack
        direction="row"
        spacing={3}
        sx={{ 
          width: '90%',
          display: 'flex',
          justifyContent: 'space-between' 
        }}
      >
        {stats.map((stat, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              flex: 1, 
              p: 3 ,
              borderRadius: '16px',
              border: '2px solid #E5E7EB',
              display: 'flex',
              flexDirection: 'row', 
              alignItems: 'center',  
              justifyContent: 'space-between', 
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.03)',
            }}
          >
            {/* Left side: Text Content */}
            <Box>
              <Typography
                variant="body2"
                sx={{ color: '#6B7280', fontWeight: 500, mb: 1.3 }}
              >
                {stat.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: '#111827', mb: 1 }}
              >
                {stat.amount}
              </Typography>
              {/* <Typography
                variant="caption"
                sx={{ color: stat.trendColor, fontWeight: 600, fontSize: '0.75rem' }}
              >
                {stat.trend}
              </Typography> */}
            </Box>

            {/* Right side: Icon Symbol */}
            <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
              {stat.icon}
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}