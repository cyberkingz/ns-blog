import React from 'react'
import Header from '../ComponentsUk/Header'
import Body from '../ComponentsUk/Body'
import SubHeader from '../ComponentsUk/SubHeader'
import StickBar from '../ComponentsUk/StickBar'


function Home() {
  return (
    <div>
      <Header />
      <StickBar />
      <SubHeader />
      <Body />
    </div>
  )
}

export default Home