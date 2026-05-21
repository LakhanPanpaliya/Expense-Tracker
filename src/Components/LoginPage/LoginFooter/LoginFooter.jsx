import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

export default function LoginFooter() {
  return (
    <Box component="footer" sx={{ position:'fixed',bottom:0, width: '100%', borderTop: '1px solid #e0e0e0', py: 3, mt: 'auto' }}>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
        
        {/* Copyright */}
        <Typography variant="body2" sx={{ color: '#757575' }}>
          © 2026     ExpenseTracker. All rights reserved.
        </Typography>

        {/* Links */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {['Privacy Policy', 'Terms of Service', 'Security', 'Status'].map((text) => (
            <Link key={text} href="#" underline="none" sx={{ color: '#424242', fontSize: '0.875rem', '&:hover': { color: '#000' } }}>
              {text}
            </Link>
          ))}
        </Box>

      </Container>
    </Box>
  );
}