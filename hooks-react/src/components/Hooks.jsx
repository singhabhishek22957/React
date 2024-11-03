import { useState } from 'react'

function Hooks() {
  let [counter, setCounter] = useState(15)
  // let counter = 5;

  const addValue=()=>{
    
    if(counter>=20){
      alert("Counter can't store negative value ")
    }else{
      counter++
    }
    console.log(counter);
    
    return setCounter(counter);

  }
  const removeValue=()=>{
    
    if(counter<=0){
      alert("Counter can't store negative value ")
    }else{
      counter--
    }
    console.log(counter);
    
    return setCounter(counter);
  }

  return (
    <>
      <h1>Chai aur React </h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue} >Add Value{counter}</button>
      <br/>
      <button onClick={removeValue} >Remove Value {counter}</button>
      <footer>
        footer: {counter}
      </footer>

      <h1 className='bg-red-500  text-center font-bold text-black m-1 '>
        Tailwind Test

      </h1>
    </>
  )
  
}

export default Hooks
