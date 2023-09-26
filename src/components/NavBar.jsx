// src/components/NavBar.jsx
import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    
    return (
        <div>
            <CartWidget/>
        <nav>
            <ul>
                <li>Álbumes</li>
                <li>Photocards</li>
                <li>Lightsticks</li>
                <li>Girl Group</li>
                <li>Boy Group</li>
            </ul>
        </nav>
        </div>
    )
 
};

export default NavBar;
