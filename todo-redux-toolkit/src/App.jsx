import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { store } from './App/store'
import { Provider } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  return(
    <Provider store={store}>
    <h1>Lean about redux toolkit</h1>
    <AddTodo/>
    <Todos/>

    </Provider>
    

  )
}

export default App
