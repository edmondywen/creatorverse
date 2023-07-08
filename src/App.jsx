import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddCreator from './pages/AddCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import ContentCreator from './components/ContentCreator'
import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className='root'>
      <nav className="headerNav">
        <li><Link to='show'>Show All Creators</Link></li>
        <li><Link to='add'>Add Creator</Link></li>
      </nav>
      <div className='outlet'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
