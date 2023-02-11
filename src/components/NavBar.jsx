import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/img/logo.png';

export const NavBar = () => {
  return (
    <header className="container my-3">
        <div className="nav row g-0 justify-content-between rounded">
            <div className="logo col-auto d-flex align-items-center ps-4">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
               
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                </div>
                <h6 className="mb-0">Desarrollador Front-End Con React</h6>
            </div>
            <nav className="menu col-auto d-flex align-items-stretch">
                <NavLink 
                to="/portafolio" 
                className="c1 px-4 d-flex align-items-center text-center text-dark text-decoration-none"
                style={({ isActive }) => {
                    return {
                      color: isActive ? "white" : "",
                    };
                }}
                >
                    <div className="w-100">
                        <span>Portafolio</span>
                        <div className="icon">
                            <i className="fa-solid fa-briefcase"></i>
                        </div>
                    </div>
                </NavLink>
                 <NavLink 
                    to="/acerca-de" 
                    className="c2 px-4 d-flex align-items-center text-center text-dark text-decoration-none"
                    style={({ isActive }) => {
                        return {
                          color: isActive ? "white" : "",
                        };
                    }}
                    >
                    <div className="w-100">  
                        <span>Acerca de</span>
                        <div className="icon">
                            <i className="fa-solid fa-user-check"></i>
                         </div>
                    </div>
                </NavLink>
                <NavLink 
                    to="/contacto" 
                    className="c3 px-4 d-flex align-items-center text-center text-dark text-decoration-none"
                    style={({ isActive }) => {
                        return {
                          color: isActive ? "white" : "",
                        };
                    }}
                    >
                    <div className="w-100">
                        <span>Contacto</span>
                        <div className="icon">
                             <i className="fa-solid fa-envelope"></i>
                     </div>
                    </div>
                </NavLink>
            </nav>
        
        </div>       
    </header>
  )
}
