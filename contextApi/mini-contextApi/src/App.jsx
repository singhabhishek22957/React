import { useState } from 'react'
import UserContextProvider from '../Context/UserCOntextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div className=' w-full h-screen bg-gray-900'>
        <h1 className=' bg-gray-700 p-4 text-center font-bold  text-3xl text-white'>Context Api </h1>
        <div className=' bg-gray-500 text-center p-4 '>
          <Login />
          <Profile />
        </div>


      </div>

    </UserContextProvider>
  )
}

export default App
