import "../css/header.css";
import {Link, useNavigate} from 'react-router-dom';
function Header() {
  return (
    <div className='header-container'>
      <div className="header-menu">
        <ul>
          <li><Link to="/"><i className="fa-solid fa-user"></i></Link></li>
          <li><Link to="/panel-view"><i className="fa-solid fa-newspaper"></i></Link></li>
          <li><Link to="/professional-panel-view"><i className="fa-solid fa-newspaper"></i></Link></li>
          <li><Link to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link></li>

        </ul>
        
        <button className="log-out"><i className="fa-solid fa-right-from-bracket"></i></button>
      </div>
    </div>
  )
}

export default Header