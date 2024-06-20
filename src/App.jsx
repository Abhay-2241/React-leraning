import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header , {Title} from './components/Header'
import Body from './components/Body'
function App() {
  

  return (
    <>
            {/* <Title/> */}
            <Header />
            <Body/>

    </>
  )
}

export default App;
