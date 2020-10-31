import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import headshot from './res/Headshot.png'
import Header from './Header.js';
import resume from './res/DerekHolland_Resume.pdf';
import './MyPage.css'


export default class MyPage extends Component {
    render(){
        return(
            <div>
            <Header PageName="DHolland Home"></Header>
            <div className="WholePage">
                <div className="MiddleSpacer">

                </div>
                <div className="Overview">
                    <p className="OverviewText">I am a Software Engineer currently looking for a job in Colorado but willing to look outside of the state as well. I studied Computer Science at CU Boulder and also minored in Economics. I have experience working in Python, Java, and C++. You can check out some of the projects I have completed below. I am always trying to learn and grow as both a coder and person and seek out new experiences and different points of view whenever possible. While I enjoy creating new software apps, I also enjoy working with my hands. I have helped remodel multiple houses with my preference being tiling in the bathrooms. In my free time, I play board games, snowboard, and watch movies.</p>
                    <p></p>
                    <a href={resume}><h2>Full Resume</h2></a>
                    </div>
                <div className="Projects">
                    <div className="GOMLDescription">
                        <a href="https://goml.app">
                        <h1>Get On My Level</h1>
                        </a>
                        <p>A Websocket based party game for as many players as you want. Also, an android application for local play</p>
                        <a href="https://github.com/deho9147/gomlApp">Github</a>
                        <a href="https://play.google.com/store/apps/details?id=e.dholland.getonmylevel">Google Play Store</a>
                    </div>
                    <div className="SkiJDescription">
                        <Link to="/skij">
                        <h1>Ski-J</h1>
                        </Link>
                        <p>Java based Android application to control music volume while you ski</p>
                        <a href="https://github.com/deho9147/SkiDJ">Github</a>
                        <a href="https://play.google.com/store/apps/details?id=e.dholland.ski_j">Google Play Store</a>
                    </div>
                    <div className="ECExamDescription">
                        <Link to="/ec_exam">
                        <h1>Electoral College Examination</h1>
                        </Link>
                        <p>Election Maps from 1976 until 2016 taking a look at how more proportionally assigning Electoral College Votes may change results of Elections</p>
                        <a href="https://github.com/deho9147/Ec_exam">Github</a>
                    </div>
                    <div className="MechGameDescription">
                    <a href="https://github.com/deho9147/3308-TeamProject">
                    <h1>VR Mech Game</h1>
                    </a>
                    <p>Worked in a 4 person team using Unity and C# to create a game where the player controlled a Mech which could shoot as well as punch enemies and destroy buildings</p>
                    <a href="https://github.com/deho9147/3308-TeamProject">Github</a>
                    </div>
                </div>
            </div>
                <div className="HeadshotContainer">
                    <img className="Headshot" alt="" src={headshot}
                    height="330px">
                    </img>
                </div>
            </div>
        )
    }
}