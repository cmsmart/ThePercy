import React, { Component } from 'react'

const NavItem = (props) => {
  return (
    <li className={props.onClick()} >
      <a href={props.path}>
        <img className="nav-icons" src={require(`../assets/${props.image}`)} alt="icon"/>
        {props.title}
      </a>
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
        <NavItem path="/dashboard" image="dashboard_historical.svg" title="Past Races" />
        <NavItem path="/mushers" image="team.svg" title="Mushers" />
        <NavItem path="/statistics" image="analytics.svg" title="Statistics" />
      </ul>
    </nav>
  )
}

}

export default NavBar