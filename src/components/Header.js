import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
export default class Header extends Component{
    componentDidMount(){
        document.title = this.props.PageName;
    }
    render(){
        return(
            <div className="Header">
                    <div className="Header_Title">
                        <Link to="/home"><h1> Derek Holland </h1></Link>
                    </div>
                    <div className="Header_Info">
                        <p>dholland.14@gmail.com</p>
                        <a href="https://github.com/deho9147"> Github</a>
                        <a href="https://www.linkedin.com/in/derek-holland-887605163">LinkedIn</a>
                    </div>
                </div>
        )
    }
}