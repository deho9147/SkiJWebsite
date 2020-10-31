import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route, Redirect} from 'react-router-dom';
import SkijPage from './components/SkijPage';
import MyPage from './components/MyPage';
import EcExamination from './components/EcExamination';
import ScrollToTop from './components/ScrollToTop';
import GOML from './components/GOML_game';
import MapChart from './components/MapChart'
const routing = (
    <HashRouter>
        <ScrollToTop>
            <Route exact path="/">
                <Redirect to="/home"></Redirect>
            </Route>
            <Route path = "/home" component = {MyPage} />
            <Route path = "/getonmylevel" component={GOML}/>
            <Route path = "/skij" component = {SkijPage}/>
            <Route path = "/ec_exam" component = {EcExamination}/>
            <Route path = "/map_test" component= {MapChart}/>
        </ScrollToTop>
    </HashRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
