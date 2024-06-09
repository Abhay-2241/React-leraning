import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import burgerking from './Burgerking'

function App() {
  

  return (
    <>
      <img src='https://media.gettyimages.com/id/458712729/photo/sign-of-burger-king-in-liverpool.jpg?s=2048x2048&w=gi&k=20&c=_UjTTQIiUJH2s18HoBo1y4jt1UF0s893fy7iKudRS_Y=' style={{width:"100px",height:"100px" , padding:"10px"}}/>
      <br></br>
      {burgerking.name}
    </>
  )
}

export default App
