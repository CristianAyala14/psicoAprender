import "../css/header.css";
import {Link, useNavigate} from 'react-router-dom';
function Header() {
  return (
    <div className='header-container'>
      <div className="header-menu">

        <Link to="/"><i class="fa-solid fa-house"></i></Link>
        <Link to="/getstarted"><p>INICIAR SECION</p></Link>
        <Link to="/admin-view"><p>PANEL</p></Link>
        <Link to="/professional-view"><p>PANEL</p></Link>
        <Link to="/profile-view"><p>PERFIL</p></Link>
        <Link to="/search"><p>BUSCAR</p></Link>
        
      </div>
    </div>
  )
}

export default Header