import React from 'react';
import SearchBar from './SearchBar.jsx';
import {Link} from "react-router-dom";
import './Nav.css';


function Nav({onSearch, handleDarkMode}) {
  return (
    
    <nav className="containerNav">
      
  
      <Link to="/" style={{textDecoration:"none"}}>
        <h2 className="title" >Weather App</h2>
      </Link>
{/*           <img id="logoHenry" src={Logo} width="40" height="40" className="d-inline-block align-top" alt="" /> 
 */}           

      <SearchBar
          onSearch={onSearch}
        />
        <div className="containerLinks">
                <Link to="/about" style={{textDecoration:"none"}}><p style={{color:"white"}}>About Us</p></Link>

        <button onClick={()=> handleDarkMode()} className="darkMode">Dark Mode</button>
        </div>
    </nav>
    
    );
};

export default Nav;
