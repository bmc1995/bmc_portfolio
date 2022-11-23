import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./nav";
import './header.css'

const Header = () => {
    return (
        <header className="main-header" style={{'display': 'flex', 'justifyContent': 'space-between', 'borderBottom': '1px solid black'}}>
            <NavLink to={'/'} style={{'fontSize': '24px', 'alignItems': 'start', outline: 'none', fontStyle: 'normal'}}>{document.title}</NavLink>
            <span><Nav/></span>
        </header>
    )
}

export default Header