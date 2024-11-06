import { useState } from 'react'
import { Header ,Home , Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
  //  <h1 className=' m-4 text-center text-3xl font-bold bg-green-400 p-4'>Reat Router</h1>
  <>
    <Header/>
    <Home/>

    <Footer/>
  </>
  )
}

export default App
