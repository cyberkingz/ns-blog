import React from 'react'
import './SubHeader.css'

function SubHeader() {
  return (
    <div className='SubHeader' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#1e293b', padding: '10px', color: 'white'}}>
        <h2>Nous avons passé les trois derniers mois à tester les appareils anti-cellulite les plus vendus.</h2>
    </div>
  )
}

export default SubHeader