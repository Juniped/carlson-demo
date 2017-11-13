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
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


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
			<link href="//cdn.muicss.com/mui-0.9.28/css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
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

function TopBar() {
	return (
		<ul className="top-bar">
		  <li className="top-bar"><NavLink className="top-bar" to="/">Home</NavLink></li>
		  <li className="top-bar"><NavLink className="top-bar" to="/Resume">Resume</NavLink></li>
		  <li className="top-bar"><NavLink className="top-bar" to="/Contact">Contact</NavLink></li>
		  <li className="top-bar">
		  	<a className="top-bar" href="https://github.com/Juniped" target="_blank">
		  		<i style={liStyle} className="fa fa-github fa-pull-left" aria-hidden="true"></i>GitHub
		  	</a>
		  </li>
		</ul>
	);
}

function Content() {
	return (
		<Container>
			<Row>
				<div className="main-content">
					<Route exact path="/" component={Home}/>
			        <Route path="/Resume" component={Resume}/>
			        <Route path="/Contact" component={Contact}/>
		        </div>
	        </Row>
        </Container>
	);
}


ReactDOM.render(
	<App />, 
	document.getElementById('root')
);
// registerServiceWorker();
