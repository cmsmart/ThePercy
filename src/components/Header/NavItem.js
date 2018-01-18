import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavItem = (props) => {
    return (
        <li>
            <NavLink to={props.path}>
                <img className="nav-icons" src={require(`../../assets/${props.image}`)} alt="icon"/>
                {props.title}
            </NavLink>
        </li> 
    )
}