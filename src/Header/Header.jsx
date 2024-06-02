import './Header.css'
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Header() {
    return (
        <>
    <header className="main-header">
      <div className='header-logo'>
        <h1 className='main-heading'>
          Murang'a University <br/>
          Tech Club MUTC
        </h1>
        
      </div>

      <div className='navbar-wrapper'>
        <nav className='navbar'>
          <ol className='nav-list'>
            <li className='list-item'> <Link to = "/">Home</Link></li>
            <li className='list-item'> <Link to = "/Leadership">Leadership</Link></li>
            <li className='list-item'><Link to = "/Tracks">Tracks</Link></li>
            <li className='list-item'><Link to = "/Events">Events</Link></li>
          </ol>
        </nav>
      </div>

    </header>
        </>
    )

    
}

export default Header;