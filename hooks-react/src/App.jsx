import { useState } from 'react'
import TailwindCSS from './tailwindCSS'
import Hooks from './components/Hooks.jsx'
import Card from './components/Card'
import CounterHiddenFe from './components/CounterHiddenFe.jsx'
import ColorChanger from './components/ColorChanger.jsx'

function App() {

  // let myObject = {
  //   username:"Hitesh",
  //   age:21
  // }


  return (
    <>
      {/* <TailwindCSS/>
      <Hooks/> */}
      {/* <Card  image='https://www.shutterstock.com/shutterstock/photos/2491116325/display_1500/stock-photo-portrait-of-little-boy-studying-in-classroom-at-school-young-happy-caucasian-boy-doing-his-2491116325.jpg' />
      <Card/>

      <CounterHiddenFe/> */}


      <ColorChanger/>
      
    </>

    
  )
  
}

export default App
