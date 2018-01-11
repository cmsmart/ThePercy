import React from 'react'
import ProfileCard from './ProfileCard';



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
      
import SimpleBarChart from '../components/MusherRaceHistory'

export const MushersPage = (props) => {
  return (
    <div className='mushers-page'>
      <h1>Mushers Name</h1>

      <SimpleBarChart />
    </div>
  )
}