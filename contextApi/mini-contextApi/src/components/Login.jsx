import React, { useContext, useState } from 'react'
import UserContext from '../../Context/UserContext'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {setUser} = useContext(UserContext)



  const handleSubmit=(e)=>{
    e.preventDefault()
    setUser({username,password})

  }

  return (
    <div>
     <h2 className=''>Login page</h2>
     <input type='text'  
     onChange={(e)=> setUsername(e.target.value)}
      value={username} 
      placeholder='username' />
      {"  "}
     <input type='text'
     value={password}
     onChange={((e)=> setPassword(e.target.value))} placeholder='password' />
     <button onClick={handleSubmit}>Submit </button>
     
    </div>
  )
}

export default Login