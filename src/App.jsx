import { Outlet, Link, useLocation } from 'react-router-dom'
import Footer from './components/footer';
import './App.css'

function App() {
  const location = useLocation();

  const customStyle = {'textDecoration': 'underline', 'color': '#3A3B3C'}

  return (
    <div className='root'>
      <nav className="headerNav">
        <li className="link" style={(location.pathname === '/show') ? customStyle: null}><Link to='show'>show all</Link></li>
        <li>|</li>
        <li className="link" style={(location.pathname === '/add') ? customStyle: null}><Link to='add'>add creator</Link></li>
        {/* <li>|</li>
        <li className="link"><Link to='add'>{location.pathname}</Link></li> */}
      </nav>
      <div className='outlet'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
