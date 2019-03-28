import React from "react";
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const border = {
	// border:'1px solid red',
}

const iconStyle = {
	// float: left;
    // display: block;
    color: 'black',
    // text-align: center;
    // padding: 14px 16px;
    textDecoration: 'none',
}

const fontStyle = {
    fontSize: "15px",
}

class Contact extends React.Component {
  render() {
    return (
    	<div>
    		<Container fluid={true}>
    			<Row>
    				<Col lg={6} style={border}>
                        <p style={fontStyle}><b> A little about me:</b><br />
                            Primarily Backend DevOps Engineer in InfoSec at Cisco.
      
                            Experienced in Python and various Python frameworks, as well as various Databases, JS and JS Frameworks.
                            Primarily focused on Python and assocaited development.
      
                            Please feel free to reach out to me if you have any questions. I always try to get back to emails the day of, and if I'm not available for a phone call
        					leave a message and I'll answer you as soon as I can. If you prefer you can send me a text and I can answer that as fast as possible. Thanks!
                        </p>
    				</Col>
    				<Col lg={6} style={border}>
	    				<h5><b>Email:</b> pats.carlson@gmail.com</h5>
			    		<h5><b>Phone:</b> (828)-263-6714</h5>
    				</Col>
    			</Row>
    			<br />
    			<Row>
    				<Col lg={4}>

    				</Col>
    				<Col lg={4} >
	    				<a href="https://www.facebook.com/CarlsonPatrick" style={iconStyle}>
	    					<i class="fa fa-facebook fa-2x fa-fw" aria-hidden="true" ></i>
	    				</a>
	    				<a href="https://twitter.com/Juniped_" style={iconStyle}>
		    				<i class="fa fa-twitter fa-2x fa-fw" aria-hidden="true" href=""></i>
	    				</a>
		    			<a href="https://www.linkedin.com/in/junipedncsu/" style={iconStyle}>
		    				<i class="fa fa-linkedin fa-2x fa-fw" aria-hidden="true"></i>
		    			</a>
		    			<a href="https://plus.google.com/u/2/100478584123953063317" style={iconStyle}>
		    				<i class="fa fa-google-plus fa-2x fa-fw" aria-hidden="true"></i>
		    			</a>
		    			<a href="https://www.instagram.com/juniped/?hl=en" style={iconStyle}>
							<i class="fa fa-instagram fa-2x fa-fw" aria-hidden="true"></i>
						</a>
					</Col>
					<Col lg={4}>

					</Col>

    			</Row>
    		</Container>
    	</div>
    )
   }
}
export default Contact
