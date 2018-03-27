import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import './index.css';
import Home from "./Home";
import Resume from './Resume';
import Contact from './Contact';

let continerStyle = {
	marginLeft:"0px",
	marginRight: "0px",
	marginTop: "10px",
	paddingTop: "17px",
}

let mainContainer = {
    padding: "40px",
}

export default class App extends React.Component{
	render() {
		return(
			<HashRouter>
        		<div >
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css" />
        			<link href="//cdn.muicss.com/mui-0.9.28/css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
        			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />

                        <TopBar />
          				<Content />
    			</div>
			</HashRouter>
		);
	}
}
const liStyle = {
	marginTop: '2px',
}

const navbarStyle = {
    backgroundColor: "#ce1616",
}

function TopBar() {
	return (
        <nav class="navbar" style={navbarStyle} role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <div className="navbar-burger is-hidden-tablet">
				        <span >Home></span>
				        <span >Resume</span>
				        <span >Contact></span>
				        <span>github</span>
              </div>
			      </div>
            </div>
            <div className="navbar-menu is-hidden-mobile">
        		<li className="top-bar"><NavLink className="top-bar" to="/">Home</NavLink></li>
        		<li className="top-bar"><NavLink className="top-bar" to="/Resume">Resume</NavLink></li>
        		<li className="top-bar"><NavLink className="top-bar" to="/Contact">Contact</NavLink></li>
        		<li className="top-bar">
            		<a className="top-bar" href="https://github.com/Juniped" target="_blank">
            		  	<i style={liStyle} className="fa fa-github fa-pull-left" aria-hidden="true"></i>GitHub
            		</a>
    	        </li>
            </div>
            </nav>
	);
}

function Content() {
	return (
    	<div className="container" style={mainContainer}>
            <div class="card">
    			<Route exact path="/" component={Home}/>
                <Route path="/Resume" component={Resume}/>
    	        <Route path="/Contact" component={Contact}/>
            </div>
        </div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
// registerServiceWorker();
