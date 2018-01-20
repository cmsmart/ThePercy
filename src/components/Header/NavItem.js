import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavIcon } from './NavIcon';

export const NavItem = (props) => {
    return (
        <li>
            <NavLink to={props.path} exact >
                <NavIcon viewBox={props.viewBox} svg={props.svg} />
                {props.title}
            </NavLink>
        </li> 
    )
}