import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li>
      <NavLink to={props.path}>
      <a href={props.path}>
        <img className="nav-icons" src={require(`../../assets/${props.image}`)} alt="icon"/>
        {props.title}
      </a>
      </NavLink>
    </li> 
  )
}

class NavBar extends Component{

  render() {
  return (
    <nav>
      <ul>
        <NavItem path="/tracker" image="map.svg" title="Race Map"/>
        <NavItem path="/dashboard" image="dashboard.svg" title="Dashboard" />
        <NavItem path="/pastraces" image="dashboard_historical.svg" title="Past Races" />
        <NavItem path="/mushers" image="team.svg" title="Mushers" />
        <NavItem path="/statistics" image="analytics.svg" title="Statistics" />
        {/* <NavLink to="/tracker" image="map.svg">Race Map</NavLink>
        <NavLink to="/dashboard" image="dashboard.svg">Dashboard</NavLink>
        <NavLink to="/dashboard" image="dashboard_historical.svg">Past Races</NavLink>
        <NavLink to="/mushers" image="team.svg" title="Mushers" >Mushers</NavLink>
        <NavLink to="/statistics" image="analytics.svg" title="Statistics">Statistics</NavLink> */}
      </ul>
    </nav>
  )
}

}

export default NavBar