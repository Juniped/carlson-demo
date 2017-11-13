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
		<ul className="top-bar">
		  <li className="top-bar"><NavLink className="top-bar" to="/">Home</NavLink></li>
		  <li className="top-bar"><NavLink className="top-bar" to="/Resume">Resume</NavLink></li>
		  <li className="top-bar"><a className="top-bar" href="mailto:pats.carlson@gmail.com">Contact</a></li>
		  <li className="top-bar"><a className="top-bar" href="https://github.com/Juniped" target="_blank">GitHub</a></li>
		  <li className="top-bar"><a className="top-bar" href="https://www.linkedin.com/in/junipedncsu/" target="_blank">LinkedIn</a></li>
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
