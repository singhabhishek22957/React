import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGen() {
  let [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState('')

  // use ref 
  const passwordRef = useRef(null);

  const copyPassword = useCallback(()=>{
    passwordRef?.current.select();
    navigator.clipboard.writeText(password);
  },[setPassword,password])

  const passwordGenerator = useCallback(()=>{
    let  pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str+="<>?:;()_-*+!@#$%&"
    }
    for(let i = 0;i<=length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length+1))
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
    console.log('Hello');
    
  },[length,setPassword,charAllowed,numberAllowed])
  
  
  return (
    <div className=" w-full h-screen bg-gray-900">
      <div className=" flex flex-col justify-center items-center  ">
        <div className=" flex flex-col text-center  outline-none w-[60%]   bg-gray-700 h-auto mx-6 my-6  ">
       
          <div className=" w-[90%]  ">
          <h1  className=" text-3xl py-3 ">Password Generator </h1>
            <input readOnly ref={passwordRef} value={password} placeholder="Password Generator" className=" w-[40%]  p-2 flex-grow " />
            <button onClick={copyPassword} className=" hover:bg-blue-300 hover:text-black  px-4 bg-blue-700 text-white font-bold  p-2">
              Copy
            </button>
          </div>
          <div className="flex justify-center gap-6">
            <div>
            <input
                type="range"
                value={length}
                min={6}
                max={100}
                className=" cursor-pointer "
                onChange={(e) => {
                  setLength(e.target.value);
                }} />
              <label> Length:{length}</label>
            </div>
            <div>
              <input onClick={()=>{
                setNumberAllowed((prev)=>!prev)
              }} type="checkbox" value={numberAllowed} className="m-1" />
              <label>Number</label>
            </div>
            <div>
              <input onClick={()=>{
                setCharAllowed((prev)=>!prev)
              }} type="checkbox" value={numberAllowed} className="m-1" />
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGen
