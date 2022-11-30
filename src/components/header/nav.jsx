import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (    <>
                {/* <NavLink style={{"margin": '0 5px'}} to={'/projects'}>Projects</NavLink> */}
                {/* <NavLink style={{"margin": '0 5px'}} to={'/blog'}>Blog</NavLink> */}
                <NavLink style={{"margin": '0 5px'}} to={'/resume'}>Resume</NavLink>
                </>
    )
}

export default Nav