import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import IMG from '../img/clearlift.png'
import { Check } from '@mui/icons-material'; // Import the Check icon from MUI
import Container from '@mui/material/Container';

function SecondProduct() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '50px'}}>
    

      <div className='imgTextWrapper' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px'}}>

      <div className='img-container'>
        <img src={IMG} alt="" width={'50%'} style={{borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)'}}/>
      </div>


      <div style={{ textAlign: 'left', padding: '20px', paddingBottom: '0px'}}>
        <div className='TextSection'>
        <h3>Why Estheticians Choose Clearlift as the Best Overall Choice for Permanent Hair Removal</h3>

        <p>By far, everyone had the best results with the Clearlift handset (known for their clinical devices, their at-home devices are also perfect for permanent hair removal).</p>

        <p>A fan favorite since their company began, it features adjustable power levels, and glide mode - allowing for a complete laser hair removal session in just 5 minutes. For all of us, it took just about 8 sessions using it once per week to stop unwanted hair growth.</p>
        </div>

        <div className="ListSection">
        <Typography component="div">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Check sx={{ color: 'green', marginRight: '5px' }} /> Works on all skin tones & hair colors.
        </Box>
        </Typography>
        <Typography component="div">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Check sx={{ color: 'green', marginRight: '5px' }} /> Costs ​$364 at standard price.
          </Box>
        </Typography>
        <Typography component="div">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Check sx={{ color: 'green', marginRight: '5px' }} /> Unique glide-mode feature, making it extremely simple & quick to use.
          </Box>
        </Typography>
        <Typography component="div">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Check sx={{ color: 'green', marginRight: '5px' }} /> With glide mode - sessions take only around 5 minutes rather than the standard 20-30 minutes.
          </Box>
        </Typography>
        <Typography component="div">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Check sx={{ color: 'green', marginRight: '5px' }} /> It took us just about 8 uses to stop unwanted hair growth.
          </Box>
        </Typography>
        </div>
      </div>



      </div>

      <Divider />

    </div>
  )
}

export default SecondProduct