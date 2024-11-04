import { useState, useCallback, useEffect , useRef } from "react";
import Card from "./component/Card";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // ref hook
  const passwordRef = useRef(null);

  const copyPasswordToClick = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,4)  
    window.navigator.clipboard.writeText(password)
  },[setPassword])

  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+";
    }
    for (let i = 0; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [numberAllowed, length, charAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator()

  },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
      <div className="w-full h-screen bg-gray-400">
        <h1 className=" text-4xl text-center text-white pb-1  bg-black ">
          Password Generator
        </h1>

        <div className="w-full max-w-[40%] h-auto mb-8   mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
          <h1 className=" text-white text-center my-3 ">Password Generator </h1>
          <div className="flex shadow rounded-lg ">
            <input
              type="text"
              value={password}
              placeholder="Password"
              className=" outline-none w-full py-1 px-3"
              readOnly
              ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClick} 
             className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
              Copy
            </button>
          </div>
          <div className="flex gap-7">
            <div className=" flex item-center gap-x-1">
              <input
                type="range"
                value={length}
                min={6}
                max={100}
                className=" cursor-pointer "
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className=" flex item-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className=" cursor-pointer "
                onChange={() => {
                  setNumberAllowed((prev) =>!prev);
                }}
              />
              <label>Number</label>
            </div>
            <div className=" flex item-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInout"
                className=" cursor-pointer "
                onChange={() => {
                  setCharAllowed((prev)=>!prev);
                }}
              />
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
