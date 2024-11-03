import React, { useState } from 'react'

function CounterHiddenFe() {

  let [counter , setCounter]  = useState(0)

  const addValue =()=>{
    // setCounter((prevCounter)=>{prevCounter+1})
    // setCounter((prevCounter)=>{prevCounter+1})
    // setCounter((prevCounter)=>{prevCounter+1})
    // setCounter((prevCounter)=>{prevCounter+1})
    setCounter(counter+1)
    

  }
  const removeValue =()=>{
    // setCounter((prevCounter)=>{prevCounter-1})
    // setCounter((prevCounter)=>{prevCounter-1})
    // setCounter((prevCounter)=>{prevCounter-1})
    // setCounter((prevCounter)=>{prevCounter-1})
    setCounter(counter-1)
 }

  
  


  return (
    <>
    <h1>Hello</h1>
    <h2>
      counter :{counter}
    </h2>

    <button className='border border-red-600 border-2 p-1 ml-1 bg-gray-200 ' onClick={addValue}>Add Value</button>
    <button className='border border-red-600 border-2 p-1 ml-1 bg-gray-200 ' onClick={removeValue}>remove Value</button>
    </>

  )
}

export default CounterHiddenFe