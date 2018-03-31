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
                            I am a developer based out of Raleigh, NC. I currently work full time at Cisco as a Automation Software Engineer. Most of my experience has been on backend automation with Python and Django connectors for Business Processes.
                            I have a small amount of Web Development experience, and I am always willing to learn more. I graduated North Carolina State University wioth a B.S. in Computer Science in 2017, and I have previous
                            experience working for NCSU maintaining Databases and working walk-up help desks while in High School.</p>
                        <p>
                            I was born in California and moved to North Carolina when I was 15. My family lives in Boone and I grated High School from there as well. I started school at NCSU by majoring in
                            Computer Engineering butI changed to Computer Science my Sophmore year. In my free time I paint minature models and play competative shooters.
                            I live in South East Raleigh with my Wife Katie and our dog Otto who make up my wonderful family.
                        </p>
    					<p>
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