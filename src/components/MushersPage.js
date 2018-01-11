import React from 'react'
import ProfileCard from './ProfileCard';
import SimpleBarChart from '../components/MusherRaceHistory'



export const MushersPage = props => {
  return (
    <div className="mushers-page">
      <p>Mushers Page</p>
      {/* {props.map(prop => { */}
       <div className="myCards">
        <ProfileCard name={props.races} src={require("../assets/cardimage1.jpg")} />
        <ProfileCard name={props.name} src={require("../assets/cardimage1.jpg")} />
        <ProfileCard name={props.name} src={require("../assets/cardimage1.jpg")} />
        <ProfileCard name={props.name} src={require("../assets/cardimage1.jpg")} />
        <ProfileCard name={props.name} src={require("../assets/cardimage1.jpg")} />
        <ProfileCard name={props.name} src={require("../assets/cardimage1.jpg")} />
      </div>
        <SimpleBarChart />
      </div>
      )
    }
