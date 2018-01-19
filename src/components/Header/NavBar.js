import React from 'react'
import { NavItem } from './NavItem'

export const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <NavItem path="/tracker" image="map.svg" title="Race Map" />
        <NavItem path="/dashboard" image="dashboard.svg" title="Current Race" />
        <NavItem path="/pastraces" image="dashboard_historical.svg" title="Past Races" />
        <NavItem path="/mushers" image="team.svg" title="Mushers" />
        <NavItem path="/statistics" image="analytics.svg" title="Statistics" />
      </ul>
    </nav>
  )
}