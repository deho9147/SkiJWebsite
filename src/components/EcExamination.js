import React, {Component} from 'react';
import './EcExamination.css';
import 'react-papaparse';
import CsvDisplay from './CsvDisplay.js'
import Header from './Header.js'
import year1976 from './res/map_pictures/svgs/1976_compress.svg';
import year1980 from './res/map_pictures/svgs/1980_compress.svg';
import year1984 from './res/map_pictures/svgs/1984_compress.svg';
import year1988 from './res/map_pictures/svgs/1988_compress.svg';
import year1992 from './res/map_pictures/svgs/1992_compress.svg';
import year1996 from './res/map_pictures/svgs/1996_compress.svg';
import year2000 from './res/map_pictures/svgs/2000_compress.svg';
import year2004 from './res/map_pictures/svgs/2004_compress.svg';
import year2008 from './res/map_pictures/svgs/2008_compress.svg';
import year2012 from './res/map_pictures/svgs/2012_compress.svg';
import year2016 from './res/map_pictures/svgs/2016_compress.svg';

import csv1976 from './res/csvs/1976.csv';
import csv1980 from './res/csvs/1980.csv';
import csv1984 from './res/csvs/1984.csv';
import csv1988 from './res/csvs/1988.csv';
import csv1992 from './res/csvs/1992.csv';
import csv1996 from './res/csvs/1996.csv';
import csv2000 from './res/csvs/2000.csv';
import csv2004 from './res/csvs/2004.csv';
import csv2008 from './res/csvs/2008.csv';
import csv2012 from './res/csvs/2012.csv';
import csv2016 from './res/csvs/2016.csv';



export default class EcExamination extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            map_key:"1976",
            map_dict: {"1976":year1976,"1980":year1980,"1984":year1984,
            "1988":year1988,"1992":year1992,"1996":year1996, "2000":year2000,
            "2004":year2004,"2008":year2008, "2012":year2012, "2016":year2016},
            csv_dict: {"1976":csv1976,"1980":csv1980,"1984":csv1984,
            "1988":csv1988,"1992":csv1992,"1996":csv1996, "2000":csv2000,
            "2004":csv2004,"2008":csv2008, "2012":csv2012, "2016":csv2016}
        })
    }

    readTextFile(file){
        var rawFile = new XMLHttpRequest();
        var allText = ""
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function (){
            if (rawFile.readyState === 4){
                if (rawFile.status === 200|| rawFile.status === 0){
                    allText = rawFile.responseText;
                }
            }
        }
        rawFile.send(null)
        return allText;
    }
    handlePress = event => {
        console.log(event.target.val)
        this.setState({
            map_key: event.target.name,
        })
    }
    

    render(){
        return(
            <div>
            <div className="ECPage">
                <Header PageName="EC Examination"></Header>
                <div className="ECTitle">
                    <h1> Electoral College Examination</h1>
                </div>
                <div className="MapDiv">
                    <h1>{this.state.map_key}</h1>
                    <img className="MapImage" alt="" src= {this.state.map_dict[this.state.map_key]}></img>
                    <p>*please note values are based on width not on area*</p>
                </div>
                <div className="buttonList">
                    <button className= "buttonSingle" name="1976" onClick={this.handlePress}>1976</button>
                    <button className= "buttonSingle" name ="1980" onClick={this.handlePress}>1980</button>
                    <button className= "buttonSingle" name="1984" onClick={this.handlePress}>1984</button>
                    <button className= "buttonSingle" name ="1988" onClick={this.handlePress}>1988</button>
                    <button className= "buttonSingle" name="1992" onClick={this.handlePress}>1992</button>
                    <button className= "buttonSingle" name ="1996" onClick={this.handlePress}>1996</button>
                    <button className= "buttonSingle" name="2000" onClick={this.handlePress}>2000</button>
                    <button className= "buttonSingle" name ="2004" onClick={this.handlePress}>2004</button>
                    <button className= "buttonSingle" name="2008" onClick={this.handlePress}>2008</button>
                    <button className= "buttonSingle" name ="2012" onClick={this.handlePress}>2012</button>
                    <button className= "buttonSingle" name ="2016" onClick={this.handlePress}>2016</button>
                </div>
                <div className="MapExplanation">
                <p>
                    Red signifies the Republican nominee. Blue signifies the Democrat nominee.
                Green is a third party candidate.
                </p>
                <p>
                The Electoral votes given are based on exceeding a vote percentage higher than the percentage of a single EC vote.
                For example, A candidate needs just less than 2% of the state vote to gain an Electoral vote in California, whereas in Wyoming the candidate would need to exceed 33% of the state vote for an Electoral vote.
                The remaining votes not assigned go to the winner of the state.
                </p>
                <p>
                Please note the values of each party are based on width of each state rather than area.
                So while Florida may be mainly red in area it is closer to even looking width wise.
                </p>
                <p>Find the CSVs <a href="https://github.com/deho9147/EC_Exam/tree/master/Csvs">here</a> and the source code <a href="https://github.com/deho9147/EC_Exam/tree/master/">here</a></p>
                </div>
                <div className="Data">
                    <CsvDisplay csvData={this.readTextFile(this.state.csv_dict[this.state.map_key])}/>
                </div>
            </div>
            </div>
        )
    }
}