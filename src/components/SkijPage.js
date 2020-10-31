import React, {Component} from 'react';
import './MyPage.css';
import Header from './Header.js'; 
import SkiJFront from './res/skij_front.png';
import SkiJOptions from './res/skij_options.png';

export default class SkijPage extends Component {
    render(){
        return (
            <div>
            <Header PageName="Ski-J"></Header>
            <div className="App">
                <div className="App-header">
                    <h1>Ski-J</h1>
                    <p> Ski-J controls your music volume so you don't have to.</p>
                </div>
                <div className="Center">
                    <img src={SkiJFront} alt=""width='20%'></img>
                    <img src={SkiJOptions} alt=""width='20%'></img>
                    <div className="FeatureExplanation">
                        <p> I was tired of having to constantly adjust my music volume while I skied since it was always too loud while I was on the lift but too quiet while I was going down the slopes; so I built Ski-J. Using only GPS, no data required, Ski-J tracks your speed and adjust the music volume on the fly. While not complex, Ski-J offers all the features needed to make your ski days that little bit sweeter.</p>
                        <p>Sometimes you want to race down the mountain against the volume of the music, you cant set the Max Speed high so the faster you go the louder it gets. On the other hand moguls may be more your speed, set the Max Speed low and have the music play at the high volume setting the whole time.</p>
                        <p>While there are other apps which provide similar functionality Ski-J is the only app capable of detecting when you are riding the lift and keeping the volume low. That way you can better protect your hearing or talk to friends</p>
                        <p>With options to control how often GPS location is checked, which Unit works best for you, and a Light and Dark theme you are able to pick the best option for your situation.</p>
                        <p>While Ski-J was designed for in particular for fellow Skiers and Snowboarders, I also use it while driving and biking. I'm sure you can find many other uses for it as well.</p>
                    </div>
                </div>
                <div>
                    <div className="DescriptionText">
                        <a href="https://play.google.com/store/apps/details?id=e.dholland.ski_j">
                        <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                        alt=""
                        width="20%"></img>
                        </a>
                    <p> or check the source code on <a href="https://github.com/deho9147/SkiDJ">Github</a></p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}