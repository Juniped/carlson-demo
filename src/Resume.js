import React from "react";
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import FontAwesome from 'react-fontawesome';
// import Image from 'react-native';


const fontStyle = {
	fontSize: "15px",
}

const hrList ={
	float: "left",
	textDecoration: 'none',
}

const listStyling = {
    listStyleType: 'none',
    margin:'0',
    padding: '0px',
    overflow: 'hidden',
    backgroundColor: '#33333',
    display:'block',
    textAlign: 'center',
}



class Resume extends React.Component {
  render() {
    return (
    	<div>
      		<Container fluid={true}>
      			<Row>
        			<h2 align="center">PATRICK CARLSON</h2>
       			</Row>
       			<Row>
          			<Col md={5} sm={12} xs={12} lg={3}>
          				<img height="240" src={require("./images/patrick.jpg")} alt="My wife and me" />
          			</Col>
          			<Col md={7} sm={12} xs={12} lg={9}>
          				<p style={fontStyle}> 
I am a developer based out of Raleigh, NC. I currently work full time at Red Hat while attending North Carolina State University
for my BS in Computer Science. Most of my experience has been on backend automation with Python and Django connectors for Business Processes.
I have a small amount of Web Design experience, and while I have worked on existing projects, I have less experience starting
new projects.</p>
          			</Col>
        		</Row>
				<hr />
        		<Row>
        			<Col lg={1}>
        				<h4><b>Location:</b> Raleigh, NC</h4>
        			</Col>
       			</Row>

<p>
<b>Education:</b><br />
North Carolina State University, Raleigh, NC <br />
B.S. in Computer Science, (2012-Present)
<br />
<b>Skills:</b><br />
Programming Languages:<br />
• Java, Python, C, HTML, CSS, JavaScript, JS Frameworks(React, Angular), Django
<br />
Operating Systems:<br />
• Windows ( 8, 7, Vista, XP, DOS) RHEL, Fedora, Ubuntu
<br />
Database Systems: <br />
• SQL, MySQL, MongoDB
Technical Experience:
Snowshoe Hare Recognition Testing Program, Individual Undergrad Research
Programmer/Designer, May 2014 – August 2014
• Design a program to test human reaction speed of Hare identification under various circumstances.
• Create images and protocols for which to use when designing test cases.
Work Experience:
Red Hat Software, Raleigh, NC
Technical Support Intern May 2015 – Present
• Testing and debugging of various pieces of code generated by manager and associated interns.
• Worked on a development team to create Web Tools on our own created platform to enhance
engagement between engineering and support teams within Red Hat. Used Angular JS, HTML, CSS
Python and MongoDB to accomplish this.
Leadership Experience
eSports at North Carolina State University
Founding Member, August 2013 – May 2014
• Planned and ran Spring 2014 LAN with 30 attendees
President, May 2014 – August 2015
• Established relationship with Texas eSports Association to join as active Chapter.
• Planned and ran two LANS and tournaments both with over 150 attendees each with attendees from
across the state.
Honors / Awards
Eagle Scout – Boy Scouts of America</p>
	  </Container>
      </div>
    );
  }
}
 
export default Resume