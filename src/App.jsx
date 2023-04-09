import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto'>
      {/* header */}
      <Header/>
      <Outlet/>
      {/* footer */}
    </div>
  )
}

export default App
