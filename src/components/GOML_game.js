import React, {Component} from 'react';
import "./GOML_game.css";
import prompts from "./res/GOML_prompts.json"


export default class GetOnMyLevelGame extends Component {
    constructor(){
        super()
        this.state = {
            levelValue: 0,
            tunerValue: 0,
            left: prompts[0].left,
            right: prompts[0].right,
            center: prompts[3].center,
            team1Score: 0,
            team2Score: 0,
            higherLower: false
        }
    }
    setProgress= event =>{
        console.log("here")
        console.log(event.target.value)
    }
    teamScoreUpdate = event =>{
        console.log("teamScoreUpdate")
        console.log(event.target.value)
    }
    newPrompt() {
        console.log(prompts.length)
        const dictval = Math.floor(Math.random()*prompts.length)
        console.log(dictval)
        this.setState({
            left: prompts[dictval].left,
            right: prompts[dictval].right,
            center: prompts[dictval].center
        })
    };
    scorePoints = () => {
        if ((this.state.tunerValue > (this.state.levelValue-10))&&(this.state.tunerValue < (this.state.levelValue+10))){
            const newScore = this.state.team1Score+4
            this.setState({team1Score: newScore})
        }
        console.log(this.state)
    }
    


    render(){
        return(
            <div className="GOML_game">
                <div className="seekbars">
                    <div className="level">
                        <input type="range" min="0" max="1000" defaultValue="500"></input>
                    </div>
                    <div className="tuner">
                        <input type="range" min="0" max="1000" defaultValue="500" onClick={this.setProgress}></input>
                    </div>
                </div>
                <div className= "prompt">
                    <h2>{this.state.left}</h2>
                    <h1>{this.state.center}</h1>
                    <h2>{this.state.right}</h2>
                </div>
                <div className="interactions">
                    <button className="newPrompt" onClick={this.newPrompt}>New Prompt</button>
                    <button className="nextTurn">Next Turn</button>
                    <button className="scoreButton" onClick={this.scorePoints}>Score</button>
                    <label class="switch">
                        <input type="checkbox" onClick={(event)=>this.setState({
                            higherLower: event.target.checked
                        })}></input>
                        <span class="slider"></span>
                    </label>
                </div>
                <div className="teamScores">
                    <div className="team1ScoreBoard">
                        <h1>Team 1</h1>
                        <input type="number" onClick={this.teamScoreUpdate} defaultValue="0"></input>
                    </div>
                    
                    <div className="team2ScoreBoard">
                        <h1>Team 2</h1>
                        <input type onClick={this.teamScoreUpdate} defaultValue="0"></input>
                    </div>
                </div>
            </div>
            
        )
    }

    
};