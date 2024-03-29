import { Divider } from '@mui/material'
import React from 'react'
import IMG from '../img/omni.jpg'

function SecondProduct() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '50px'}}>
    

    <div className='imgTextWrapper' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px'}}>

    <div className='img-container'>
      <img className='productIMG' src={IMG} alt="" width={'50%'} style={{borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)'}}/>
    </div>


    <div style={{ textAlign: 'center', padding: '0px', paddingBottom: '0px',width: '80%' }}>
      <div className='TextSection'>
      <h1 style={{textAlign: 'center', marginBottom: '0', paddingBottom: '0'}}>Omnilux</h1>
      <h2 style={{textAlign: 'center', marginTop: '0', paddingTop: '0', marginBottom: '30px'}}>£501.65</h2>

      <p>Omnilux does have an excellent warranty and a comfortable design.</p>

      <p>It’s also a little more realistic with treatment times, stating you should use it for 10 minutes per session.</p>

      <p>While we did like how it improved tightness in skin, it took us much longer than what the website promises for 3 treatments a week for 4 weeks to see a change.</p>
        
        <p>Additionally, the price, at £501.65, is still high.</p><br/>

      </div>

     
    </div>



    </div>


    <Divider />

  </div>
  )
}

export default SecondProduct