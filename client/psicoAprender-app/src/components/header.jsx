import "../css/header.css";
import {Link, useNavigate} from 'react-router-dom';
function Header() {
  return (
    <div className='header-container'>
      <div className="header-menu">
        <Link to="/"><p>Home</p></Link>
        <Link to="/profile"><p>Profile</p></Link>
        <Link to="/getstarted"><p>Get Started</p></Link>
      </div>
    </div>
  )
}

export default Header