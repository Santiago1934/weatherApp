import React from 'react';
import SearchBar from './SearchBar.jsx';
import {Link} from "react-router-dom";
import sol from "./img/sol.png"
import noche from "./img/noche.png"
import './Nav.css';


function Nav({onSearch, handleDarkMode, darkMode}) {
  console.log("hola!" + darkMode)
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

        
        <div className="containerIcon">
          {darkMode ? <img src={sol} width="50%" height="auto" onClick={()=> handleDarkMode()}></img> : 
          <img src={noche} width="50%" height="auto" onClick={()=> handleDarkMode()}></img>}
        </div>


        </div>
    </nav>
    
    );
};

export default Nav;
