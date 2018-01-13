import React from 'react'
import NavBar from './NavBar'


export const Header = (props) => {
  return (
    <header>
        <div className="info">
          <img className="logo" src={require('../../assets/whitelogo.png')} alt="logo" width={150} height={113}/>
          <section>
            <h1 className='site-title'><a href='/'>The Percy DeWolfe Memorial Mail Race</a></h1>
            <p className='subtitle'>22 March 2018 10:00am   |   Dawson City, YT - Eagle, AK</p>
          </section>
          <aside>
            <img className="twitter" src={require('../../assets/twitter.svg')} alt="logo" width={30} height={24}/>
            <img className="facebook" src={require('../../assets/facebook.svg')} alt="logo" width={30} height={30}/>
          </aside>
        </div>
          <NavBar />
    </header>
  )
}