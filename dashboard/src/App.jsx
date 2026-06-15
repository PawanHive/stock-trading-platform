import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Hello Dashboard</h1> */}
      <Home />
    </>
  )
}

export default App
