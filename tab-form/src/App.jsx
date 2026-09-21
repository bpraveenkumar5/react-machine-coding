import { useState } from 'react'
import './App.css'
import TabForm from './components/TabForm'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Interests from './components/Interests'
import { BrowserRouter } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <BrowserRouter>
            <TabForm />
          </BrowserRouter>
    </>
  )
}

export default App;
