import { Badge, Col, Image, Row } from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import './page.module.scss';

export default function Home() {
  const badges = [
    {
      Icon: AiOutlineMail,
      link: 'mailto:anna@marekloew.com',
      text: 'Email: anna@marekloew.com',
    },
    {
      Icon: AiFillLinkedin,
      link: 'https://www.linkedin.com/in/asmarek',
      text: 'LinkedIn',
    },
    {
      Icon: AiFillGithub,
      link: 'https://www.github.com/lensesrequired',
      text: 'GitHub',
    },
  ];

  return (
    <div className="my-5">
      <main>
        <Row>
          <Col md={4} className="px-2 text-center">
            <Image
              className="mb-3"
              src="profile_picture.jpg"
              roundedCircle
              width="80%"
            />
            <h2>Anna Marek-Loew</h2>
            <h4>Principle Software Developer</h4>
            <h4>Team Tech Lead</h4>
            <h6>
              {badges.map(({ Icon, link, text }) => (
                <Badge bg="light" text="dark" className="m-1" key={text}>
                  <a href={link}>
                    <Icon size={'1.25em'} /> {text}
                  </a>
                </Badge>
              ))}
            </h6>
          </Col>
          <Col md={8}>
            <Row>
              <h2>Work Experience</h2>
              <div>
                <span>
                  <strong>
                    Senior Software Development Engineer, GoDaddy, Hiawatha, IA
                    — Jun 2018-Present
                  </strong>
                </span>
                <ul>
                  <li>
                    Development on GoDaddy internal tools for Domains customer
                    care representatives and developers
                  </li>
                  <li>Development on GoDaddy FOS WhoIs Results page</li>
                  <li>
                    Maintenance, Migration, and Update to React/NextJS of
                    Afternic FOS (from PHP)
                  </li>
                </ul>
              </div>
              <div>
                <span>
                  <strong>
                    Internship, GoCanvas, Cedar Rapids, IA — Nov 2013-May 2018
                  </strong>
                </span>
                <ul>
                  <li>Redesign and upkeep of online Help Section</li>
                  <li>Design of mobile app tests</li>
                  <li>Programming of web tests using Selenium in Java</li>
                </ul>
              </div>
              <div>
                <span>
                  <strong>
                    Department Assistant, Coe College, Cedar Rapids, IA — Aug
                    2016-May 2018
                  </strong>
                </span>
                <ul>
                  <li>
                    Provide assistance for college level mathematic and computer
                    science courses
                  </li>
                </ul>
              </div>
              <div>
                <span>
                  <strong>
                    Mathematics Research, Coe College, Cedar Rapids, IA — Summer
                    2016 & Summer 2017
                  </strong>
                </span>
                <ul>
                  <li>
                    Summer 2016 - Researched and programmed End View puzzle
                    solutions
                  </li>
                  <li>
                    Summer 2017 - Researched compositional operators on the
                    Hardy Space
                  </li>
                </ul>
              </div>
              <div>
                <span>
                  <strong>
                    Computer Science Research, Coe College, Cedar Rapids, IA —
                    Summer 2016
                  </strong>
                </span>
                <ul>
                  <li>
                    Developed design approach and began implementation of a
                    digital signage solution
                  </li>
                  <li>
                    Implemented using Google Forms, Spreadsheets, and Calendars
                    with Google Apps Script to unify submitted content
                  </li>
                </ul>
              </div>
            </Row>
            <Row>
              <h2>Education</h2>
              <div className="mb-3">
                <span>
                  <strong>
                    Iowa State University, Ames, Iowa - Masters' of Human
                    Computer Interaction
                  </strong>
                </span>
                <div>Aug 2019 - Dec 2021</div>
              </div>
              <div className="mb-3">
                <span>
                  <strong>
                    Coe College, Cedar Rapids, Iowa — Bachelors of Arts
                  </strong>
                </span>
                <div>Double Major: Mathematics and Computer Science</div>
                <div>Aug 2015 - May 2018</div>
                <div>
                  Honors: Phi Beta Kappa Honor Society, Phi Kappa Phi Honor
                  Society
                </div>
                <div>
                  Activities: Computer Science Club (President), Math Club (Vice
                  President)
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </main>
    </div>
  );
}
