import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import IMG from '../img/clearlift.png'
import { Check } from '@mui/icons-material'; // Import the Check icon from MUI

function MainProduct() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
      <div style={{textAlign: 'left'}}>



      <div style={{marginTop: '80px'}}>
      <p style={{fontWeight: 'bold'}}>Results</p>
      <p>We tested how many weeks it took for us to stop our hair growth, ideally trying to stop hair growth a couple months into weekly use.  A few of the devices ended up working extremely well, delivering permanently hairless, silky skin to us.</p>
      <Divider />
      </div>


      <div style={{marginTop: '20px'}}>
      <p style={{fontWeight: 'bold'}}>Results</p>
      <p>We tested how many weeks it took for us to stop our hair growth, ideally trying to stop hair growth a couple months into weekly use.  A few of the devices ended up working extremely well, delivering permanently hairless, silky skin to us.</p>
      <Divider />
      </div>


      <div style={{marginTop: '20px'}}>
      <p style={{fontWeight: 'bold'}}>Results</p>
      <p>We tested how many weeks it took for us to stop our hair growth, ideally trying to stop hair growth a couple months into weekly use.  A few of the devices ended up working extremely well, delivering permanently hairless, silky skin to us.</p>
      <Divider />
      </div>

      </div>



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

      <div style={{width: '100%'}}>
      <Button variant="contained" sx={{fontWeight: 'bold', backgroundColor: '#4ade80', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', borderRadius: '10px'}}>👉 Visit Their Site</Button>

      <p>*Stock is running low</p>
      </div>

      <Divider />

    </div>
  )
}

export default MainProduct