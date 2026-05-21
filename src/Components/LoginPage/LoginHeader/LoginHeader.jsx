import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'; // Matching wallet/expense icon
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/900.css';
// Links matching your screenshot
const pages = ['Help Center', 'Contact Support'];

function LoginHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#ffffff', 
        color: '#000000', 
        boxShadow: 'none', 
        borderBottom: '1px solid #e0e0e0' 
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          
          {/* DESKTOP & MOBILE: Logo and Brand Name */}
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <AccountBalanceWalletIcon sx={{ mr: 1, color: '#000000', fontSize: 28,fontFamily: 'Inter, sans-serif',
                fontWeight: 'bold', }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              // className='poppins-thin'
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'bold',
                color: '#000000',
                textDecoration: 'none',
                fontSize: '1.5rem', 
              }}
            >
              ExpenseTracker
            </Typography>
          </Box>

          {/* DESKTOP NAVIGATION (Links on the right side) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  color: '#333333', 
                  display: 'block', 
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* MOBILE NAVIGATION - Hamburger menu icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center', color: '#333333' }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default LoginHeader;