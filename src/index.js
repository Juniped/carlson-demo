import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './index.css';
import Home from "./Home";
import Resume from './Resume'

let continerStyle = {
	marginLeft:"0px",
	marginRight: "0px",
	marginTop: "10px",
	paddingTop: "17px",
}


export default class App extends React.Component{
	render() {
		return(
			<HashRouter>
			<div >
				<TopBar />
				<br />
				<Content />
			</div>
			</HashRouter>
		);
	}
}

function TopBar() {
	return (
		<ul>
		  <li><NavLink to="/">Home</NavLink></li>
		  <li><NavLink to="/Resume">Resume</NavLink></li>
		  <li><a href="mailto:pats.carlson@gmail.com">Contact</a></li>
		  <li><a href="https://github.com/Juniped" target="_blank">GitHub</a></li>
		</ul>
	);
}

function Content() {
	return (
		<div className="main-content">
			<Route exact path="/" component={Home}/>
	        <Route path="/Resume" component={Resume}/>
        </div>
	);
}


ReactDOM.render(
	<App />, 
	document.getElementById('root')
);
// registerServiceWorker();
