import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

function StickBar() {
  return (
    <AppBar
      style={{
        backgroundColor: '#0F172A',
        bottom: '0',
        top: 'auto', // Set top to 'auto'
        position: 'fixed',
      }}
    >
      <Toolbar>
        <Button
          href="https://novalight-uk.com/"
          variant="contained"
          sx={{ margin: 'auto auto', backgroundColor: '#4ade80', width: '180px', fontWeight: 'bold', fontSize: '16px' }}
        >
        👉 Visit Site
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default StickBar;
