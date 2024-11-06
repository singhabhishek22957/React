import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
let singhabhishek22957 = "singhabhishek22957"


function Github() {
  // const [data, setData] = React.useState([])
   const data = useLoaderData()

  // useEffect(()=>{
  //   fetch(`https://api.github.com/users/${singhabhishek22957}`)
  //   .then( res => res.json())
  //   .then(data =>{
  //     console.log(data);
  //     setData(data)
      

  //   })
  // },[])

  return (
    <div className=' text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} className='' width={300} alt="git"  />
    
     </div>


  )
}

export default Github


export const githubInfoLoader = async()=>{
  const response = fetch(`https://api.github.com/users/${singhabhishek22957}`)
  return (await response).json()
}