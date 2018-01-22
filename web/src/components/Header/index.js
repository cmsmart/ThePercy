import React from 'react'
import TimerContainer from '../TimerContainer/index'
import { NavBar } from './NavBar'

export const Header = (props) => {
    return (
        <header>
            <div className="info">
                <aside className="logolink">
                    <img className="logo" src={require('../../assets/whitelogo.png')} alt="logo" width={150} height={113}/>
                    <span className="weblink"><a href="/">Main website</a></span>
                </aside>
                <section>
                    <h1 className='site-title'><a href='/'>The Percy DeWolfe Memorial Mail Race</a></h1>
                    <p className='subtitle'>22 March 2018 10:00am   |   Dawson City, YT - Eagle, AK</p>
                    <TimerContainer />
                </section>
                <aside className="social">
                    <img className="twitter" src={require('../../assets/twitter.svg')} alt="logo" width={30} height={24}/>
                    <img className="facebook" src={require('../../assets/facebook.svg')} alt="logo" width={30} height={30}/>
                </aside>
            </div>
            <NavBar />
        </header>
    )
}