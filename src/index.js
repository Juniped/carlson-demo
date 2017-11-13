import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import registerServiceWorker from './registerServiceWorker
// let imageUrl = 'bg.jpg';



let continerStyle = {
	marginLeft:"0px",
	marginRight: "0px",
	marginTop: "10px",
	paddingTop: "17px",
}

// let navStyle = {
// 	// background:"white",
// 	border: "2px solid red"
// };
export default class App extends React.Component{
	render() {
		return(
			<div >
				<TopBar />
				<br />
				<div style={continerStyle}>
					<Home name="Patrick" />
				</div>
			</div>
		);
	}
}

function TopBar() {
	return (
		<ul>
		  <li><a href="#home">Home</a></li>
		  <li><a href="#news">News</a></li>
		  <li><a href="mailto:pats.carlson@gmail.com">Contact</a></li>
		  <li><a href="https://github.com/Juniped" target="_blank">GitHub</a></li>
		</ul>
	)
}

function Home(props) {
	return (
			<h1 align="Center"> Home</h1>
	);
}


ReactDOM.render(
	<App />, 
	document.getElementById('root')
);
// registerServiceWorker();
