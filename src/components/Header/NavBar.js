import React from 'react'

import { mapsvg, dashboardsvg, dashboard_historicalsvg, teamsvg, analyticssvg } from '../../assets/icons'

import { NavItem } from './NavItem'

export const NavBar = (props) => {
  return <nav>
      <ul>
        <NavItem path="/tracker" viewBox="0 0 55.017 55.017" svg={mapsvg} title="Race Map" />
        <NavItem path="/dashboard" svg={dashboardsvg} title="Current Race" />
        <NavItem path="/pastraces" svg={dashboardsvg} title="Past Races" />
        <NavItem path="/mushers" svg={teamsvg} title="Mushers" />
        <NavItem path="/statistics" svg={analyticssvg} title="Statistics" />
      </ul>
    </nav>;
}

