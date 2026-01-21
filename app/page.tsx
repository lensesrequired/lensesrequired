import { Badge, Col, Image, Row } from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

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
    <div className="resume mx-4 mb-5">
      <main>
        <Row>
          <Col md={4} className="text-center">
            <div className="sidebar mb-5">
              <Image
                className="profile-picture mb-3"
                src="profile_picture.jpg"
                roundedCircle
              />
              <h2>Anna Marek-Loew</h2>
              <h4>Full-Stack Software Developer</h4>
              <h4>Team Tech Lead</h4>
              <h6>Denver, CO</h6>
              <div>
                {badges.map(({ Icon, link, text }) => (
                  <Badge bg="light" text="dark" className="m-1" key={text}>
                    <a href={link}>
                      <Icon size={'1.25em'} /> {text}
                    </a>
                  </Badge>
                ))}
              </div>
            </div>
          </Col>
          <Col md={8} className="resume-content">
            <Row>
              <p>
                Hi! I’m a <strong>Full-Stack Software Developer</strong> with 7
                years of experience in designing, developing, and maintaining
                web applications across the entire development lifecycle.
                Proficient in both front-end and back-end technologies and
                principles, specializing in <strong>React/Redux</strong>&nbsp;
                and&nbsp;
                <strong>NodeJS/NextJS/Express</strong>, as well as DevOps for
                deploying scalable <strong>cloud services using AWS</strong>.
                Adept at leading a technical team in agile environments and
                collaborating with product, design, and business to deliver
                high-quality software solutions on time. Strong problem-solving
                skills with a passion for creating&nbsp;
                <strong>
                  customer-focused features and workflows, including AI agents
                </strong>{' '}
                by writing clean, efficient code and continuously improving
                development processes.
              </p>
              <h2>Experience</h2>
              <div>
                <span>
                  <strong>Software Development Engineer V</strong>
                  <br />
                  GoDaddy • June 2018 - Present
                </span>
                <ul>
                  <li>Current Role</li>
                  <ul>
                    <li>
                      Tech Lead & Full-Stack Developer for Afternic.com & Domain
                      Academy Tools
                    </li>
                    <ul>
                      <li>
                        Architecture creation & maintenance using AWS CDK, ECS,
                        ECR, DynamoDB, & more
                      </li>
                      <li>
                        Maintenance of NextJS/React & Express applications
                      </li>
                      <li>
                        Adoption, creation, and securing of AI tools and
                        workflows for developers and customers
                      </li>
                      <li>
                        SME on integrations with Authentication platform for
                        login, federation, and oauth flows
                      </li>
                      <li>
                        Oversee & contribute to UX Design feasibility, ideation,
                        and experimentation efforts
                      </li>
                    </ul>
                    <li>
                      Lead Developer over Domain Investors Experience Org's
                      React common components and GitHub Action libraries
                    </li>
                    <li>Contributor to GoDaddy’s internal AWS Guild</li>
                  </ul>
                  <li>Past Roles</li>
                  <ul>
                    <li>Full-Stack Developer for Afternic.com</li>
                    <ul>
                      <li>
                        Upkeep and eventual retirement of legacy PHP codebase
                      </li>
                      <li>
                        Migration and implementation of new designs to
                        NextJS/React
                      </li>
                      <li>
                        Migration into AWS from internally hosted Kubernetes
                      </li>
                      <li>
                        Migration from AWS deployments using Sceptre to AWS
                        deployments using CDK
                      </li>
                    </ul>
                    <li>
                      Lead Developer over the acquisition and migration of
                      Domain Academy Tools into AWS/NextJS/Express/React
                    </li>
                    <li>
                      Rewrite of GoDaddy's WhoIs results page from C# to
                      NextJS/React
                    </li>
                    <li>
                      Development of internal tools for customer care
                      representatives and developers
                    </li>
                  </ul>
                </ul>
              </div>
              <div>
                <span>
                  <strong>Technical Intern</strong>
                  <br />
                  GoCanvas • November 2013 - May 2018
                </span>
                <ul>
                  <li>Redesign and upkeep of online Help Section</li>
                  <li>Design of mobile app tests</li>
                  <li>Implementation of web tests using Selenium in Java</li>
                </ul>
              </div>
              <div>
                <span>
                  <strong>Mathematics Researcher</strong>
                  <br />
                  Coe College • Summer 2016 & Summer 2017
                </span>
                <ul>
                  <li>
                    Summer 2016 - Researched and programmed End View puzzle
                    solutions
                  </li>
                  <li>
                    Summer 2017 - Researched compositional operators on the
                    Hardy Space{' '}
                    <a href="https://scholar.rose-hulman.edu/rhumj/vol21/iss1/1/">
                      Publication
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <span>
                  <strong>Computer Science Researcher</strong>
                  <br />
                  Coe College • Summer 2016
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
