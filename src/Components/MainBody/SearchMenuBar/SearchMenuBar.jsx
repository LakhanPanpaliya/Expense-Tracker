import * as React from 'react';
import { Box, InputBase, IconButton, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Form from '../Forms/Form';

const SearchBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F1F5F9',  
  borderRadius: '4px', 
  padding: '4px 12px',
  width: '350px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
  fontSize: '0.9rem',
  color: '#64748B',
  '& .MuiInputBase-input::placeholder': {
    opacity: 1,
  },
}));

export default function SeacrhMenuBar({onAddExpense,onSearch}) {
 
  function handleSearchChange(e){
    onSearch(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2px 10px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        position:'sticky',
        top:'0px',
        zIndex: 12,
        width:'90%',
      }}
    >
      {/* Left Side: Search */}
      <SearchBox>
        <SearchIcon sx={{ color: '#64748B', fontSize: 20 }} />
        <StyledInputBase
          placeholder="Search transactions..."
          onChange={handleSearchChange}
          inputProps={{ 'aria-label': 'search' }}
        />
      </SearchBox>

      {/* Right Side: Actions */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton sx={{ color: '#475569' }}>
          <NotificationsNoneOutlinedIcon fontSize="medium" />
        </IconButton>
        
        <IconButton sx={{ color: '#475569', mr: 1 }}>
          <HelpOutlineOutlinedIcon fontSize="medium" />
        </IconButton>
         <Form onFormData={onAddExpense}/> 
      </Box>
    </Paper>
  );
}