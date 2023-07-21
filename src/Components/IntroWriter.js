import React from 'react'

function IntroWriter() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '10px', color: 'white', gap: '0px'}}>
        <p style={{fontWeight: 'bold', marginBottom: '0px'}}>Écrit par Marie Bourbon</p>
        <p style={{fontStyle: 'italic'}}>Spécialiste dermathologue & rédactrice en chef</p>
    </div>

    <div>
          <p style={{fontSize: '12px', textAlign: 'center'}}>*We only recommend products we personally tested & loved.</p>

          <p>After experiencing the many pitfalls of shaving (ingrown hairs, redness, irritation, and speedy re-growth), we contemplated alternative hair removal methods this season.  Since professional laser hair removal isn't the most time-friendly option (visits take up to two hours, & cost upwards of $400 per session), and some of us can't head out to an appointment right now, we're looking at the next best thing: at-home laser hair removal devices.</p>

          <p>
          We tested 24 at-home laser hair removal devices, including models from Tria, HappySkinCo, Silk'n, Braun, and Clearlift.  We rated the best five options based on the following criteria:
          </p>
        </div>
        
    </>
  )
}

export default IntroWriter