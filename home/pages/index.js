import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

export default () => (
  <div>
    <Jumbotron
      style={ {
        height: '300px',
        display: 'flex',
        backgroundColor: 'cadetblue',
        backgroundImage: 'linear-gradient(transparent 50%, white), url("static/profile_picture.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 300px'
      } }>
      <div style={ { marginLeft: '250px' } }>
        <h1>Anna Marek</h1>
        <h3>Software Developer</h3>
        <div>Email: anna@lensesrequired.com</div>
        <div>LinkedIn: <a href={ 'https://www.linkedin.com/in/asmarek/' }>https://www.linkedin.com/in/asmarek/</a></div>
        <div>Skills: ReactJS, Javascript, NextJS/NodeJS, Python, C#/.NET, C++, Git.</div>
      </div>
    </Jumbotron>
    <div style={ { margin: '0 25px' } }>
      <Row>
        <Col lg>
          <h2>Education</h2>
          <p>
            <div><strong>Iowa State University, Ame, Iowa - Masters of Human Computer Interaction</strong></div>
            <div>Aug 2019 - Present - Expected Graduation: Dec 2021</div>
          </p>
          <p>
            <div><strong>Coe College, Cedar Rapids, Iowa — B.A.</strong></div>
            <div>Double Major: Mathematics and Computer Science</div>
            <div>Aug 2015 - May 2018</div>
            <div>Cumulative GPA: 3.975 - Computer Science GPA: 4.00 - Mathematics GPA: 3.967</div>
            <div>Honors: Phi Beta Kappa Honor Society, Phi Kappa Phi Honor Society, Dean's List</div>
            <div>Activities: Computer Science Club (President), Math Club (Vice President)</div>
          </p>
        </Col>
        <Col lg>
          <h2>Work Experience</h2>
          <p>
            <div><strong>Software Development Engineer, GoDaddy, Hiawatha, IA — Jun 2018-Present</strong></div>
            <div>Development on GoDaddy internal tools for Domains customer care representatives and developers</div>
          </p>
          <p>
            <div><strong>Internship, GoCanvas, Cedar Rapids, IA — Nov 2013-May 2018</strong></div>
            <div>Redesign and upkeep of online Help Section</div>
            <div>Design of mobile app tests</div>
            <div>Programming of web tests using Selenium in Java</div>
          </p>
          <p>
            <div><strong>Department Assistant, Coe College, Cedar Rapids, IA — Aug 2016-May 2018</strong></div>
            <div>Provide assistance for college level mathematic and computer science courses</div>
          </p>
          <p>
            <div><strong>Mathematics Research, Coe College, Cedar Rapids, IA — Summer 2016 & Summer 2017</strong>
            </div>
            <div>Summer 2016 - Researched and programmed End View puzzle solutions</div>
            <div>Summer 2017 - Researched compositional operators on the Hardy Space</div>
          </p>
          <p>
            <div><strong>Computer Science Research, Coe College, Cedar Rapids, IA — Summer 2016</strong></div>
            <div>Developed design approach and began implementation of a digital signage solution</div>
            <div>Implemented using Google Forms, Spreadsheets, and Calendars with Google Apps Script to unify
              submitted content
            </div>
          </p>
        </Col>
      </Row>
    </div>
  </div>
)
