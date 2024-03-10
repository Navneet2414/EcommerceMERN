import React, { useState } from 'react';
import "../Navbar/Navbar.css";
import logo from "../assets/logo.png";
import Cart from "../assets/cartlogo.png";

function Navbar() {

    const [menu,setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            {/* <p>SHOPPER</p> */}
            <p>MadeInIndia</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}>Women{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}>Kids {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={Cart} alt =""/>  
          <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar


