import { useState } from 'react'
import Header from './Header'
import './App.css'
import Navbar from './Navbar'
import Contents from './Contents'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='entete'>
      <Navbar />
      <Header />
      </div>
      <Contents/>
    </>
  )
}

export default App
