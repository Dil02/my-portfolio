import {motion } from 'framer-motion'
import './About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PageNavbar } from './PageNavbar';
import { PageFooter } from './PageFooter';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import QMLogo from '../Images/Assets/QM Logo.png'
import FordLogo from '../Images/Assets/Ford Logo.png'
import StLukes from "../Images/Assets/St Luke's Logo.jpg"
import KHSLogo from "../Images/Assets/KHS Logo.jpg"
import AIRoboLogo from "../Images/Assets/AI Society Logo.png"


export const About = () => {
    return (
        <div className="About">
            <PageNavbar></PageNavbar>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="display-3">Hello, I'm Dilkush.</h1>
                            <p>I recently began the role of IT Graduate at Ford Motor Company. Situated within the PD Partner Management team, my responsibilities include supporting Joint Ventures and external Engineering Service Suppliers 
                                with the process of securely accessing Ford IT Applications, Data and Infrastructure.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className='display-6'>My Journey</h2>
                            <Row>
                                <Col className='mt-1'>
                                    <h3>Experience</h3>
                                    <CardGroup>
                                        <Card className='myCards mx-auto'>
                                            <Card.Header>September 2023 - Current </Card.Header>
                                            <Card.Img variant="top" src={FordLogo} className='cardImage'></Card.Img>
                                            <Card.Body>
                                                <Card.Title>IT Graduate - PD Partner Management</Card.Title>
                                                <h6>Ford Motor Company</h6>
                                                <Card.Text>
                                                    Responsibilities:
                                                    <ul className='mt-1'>
                                                        <li>Resolution of access requests to Ford IT Applications and Data whilst protecting Ford Intellectual Property</li>
                                                        <li>Ensuring legally required data exchanges are implemented as part of the Ford Volkswagen Alliance</li>
                                                        <li>Develop strategies and governance models to ensure Ford can work effectively and efficiently with external partners</li>
                                                    </ul>
                                                </Card.Text>                                                                                                                         
                                                <Row>
                                                    <Col>
                                                        <Button variant='outline-success' className='mt-2'>Project & Risk Management</Button>
                                                        <Button variant='outline-success' className='mt-2'>Relationship building</Button>
                                                        <Button variant='outline-success' className='mt-2'>Communication</Button>
                                                        <Button variant='outline-success' className='mt-2'>Virtual Desktop Infrastructure</Button>
                                                        <Button variant='outline-success' className='mt-2'>SharePoint</Button>
                                                        <Button variant='outline-success' className='mt-2 d-flex gap-1'>Teamwork</Button>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>

                                        <Card className='myCards mx-auto'>
                                            <Card.Header>October 2021 - July 2023</Card.Header>
                                            <Card.Img variant="top" src={AIRoboLogo}></Card.Img>
                                            <Card.Body>
                                                <Card.Title>President - Aug 22 to July 23</Card.Title>
                                                <Card.Text>
                                                    President of the QM Artificial Intelligence & Robotics Society
                                                    <p>Achievements:</p>
                                                    <ul>
                                                        <li>Organised and led 3D printing workshops and robotics tutorials</li>
                                                        <li>Hosted 'ant weight' robot wars</li>
                                                        <li>Collaborated with other London universities to host speaker events</li>
                                                        <li>Created social media posts to promote society events</li>
                                                    </ul>
                                                </Card.Text>
                                                <Row>
                                                    <Col>
                                                        <Button variant='outline-success' className='mt-2'>Leadership</Button>
                                                        <Button variant='outline-success' className='mt-2 d-flex gap-1'>Bookkeeping</Button>
                                                        <Button variant='outline-success' className='mt-2'>Time Management</Button>
                                                        <Button variant='outline-success' className='mt-2'>Team Management</Button>
                                                        <Button variant='outline-success' className='mt-2 d-flex gap-1'>Adaptability</Button>
                                                        <Button variant='outline-success' className='mt-2'>Organisation</Button>
                                                    </Col>                                                   
                                                </Row>
                                                <Card.Title className='mt-3'>Projects Coordinator - Oct 21 to July 22</Card.Title>
                                                <Card.Text>
                                                    <p>Responsibilities:</p>
                                                    <ul>
                                                        <li>Assisting the President with the coordination of events</li>
                                                        <li>Managing society equipment</li>
                                                    </ul>
                                                </Card.Text>
                                                <Row>
                                                    <Col>
                                                        <Button variant='outline-success' className='mt-2'>Teamwork</Button>
                                                        <Button variant='outline-success' className='mt-2 d-flex gap-1'>Reliable</Button>
                                                    </Col>                                                   
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    
                                        <Card className='myCards mx-auto'>
                                            <Card.Header>September 2021 - February 2023</Card.Header>
                                            <Card.Img variant="top" src={QMLogo} className='cardImage'></Card.Img>
                                            <Card.Body>
                                                <Card.Title>Teaching Assistant</Card.Title>
                                                <h6>Queen Mary University of London</h6>
                                                <Card.Text>
                                                    Assisted lecturers and fellow student demonstrators within the School of Electronic Engineering and Computer Science.
                                                    <p>Activities included:</p>
                                                    <ul className='mt-1'>
                                                        <li>Addressing student questions and explaining key concepts</li>
                                                        <li>Grading assessments</li>
                                                        <li>Running laboratory sessions</li>
                                                    </ul>
                                                </Card.Text>
                                                <Row>
                                                    <Col>
                                                        <Button variant='outline-success' className='mt-2'>Teamwork</Button>
                                                        <Button variant='outline-success' className='mt-2 d-flex gap-1'>Patience</Button>
                                                        <Button variant='outline-success' className='mt-2'>Attention to detail</Button>
                                                        <Button variant='outline-success' className='mt-2 d-flex gap-1'>Enthusiasm</Button>
                                                    </Col>                                                   
                                                </Row>
                                            </Card.Body>
                                        </Card>

                                        <Card className='myCards mx-auto'>
                                            <Card.Header>September 2017 - March 2018</Card.Header>
                                            <Card.Img variant='top' src={StLukes} className='cardImage'></Card.Img>
                                            <Card.Body>
                                                <Card.Title>Shop Assistant</Card.Title>
                                                <h6>St Luke's Hospice</h6>
                                                <Card.Text>
                                                    Volunteered within a team as part of the Duke of Edinburgh Award.
                                                    <p>Responsibilities:</p>
                                                    <ul>
                                                        <li>Preparing donations for sale</li>
                                                        <li>Registering donors with gift aid</li>
                                                        <li>Replenshing stock on the shop floor</li>
                                                    </ul>
                                                </Card.Text>
                                                <Row>
                                                    <Col>
                                                        <Button variant='outline-success' className='mt-2'>Teamwork</Button>
                                                        <Button variant='outline-success' className='mt-2 d-flex gap-1'>Communication</Button>
                                                        <Button variant='outline-success' className='mt-2'>Cooperation</Button>
                                                        <Button variant='outline-success' className='mt-2 d-flex gap-1'>Dependable</Button>
                                                        <Button variant='outline-success' className='mt-2'>Building rapport</Button>      
                                                    </Col>                                                   
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </CardGroup>
                                </Col>
                            </Row>

                            <Row className='mt-3'>
                                <Col>
                                    <h3 className='mb-3'>Education</h3>
                                    <CardGroup>
                                        <Card className='myCards mx-auto'>
                                            <Card.Header>September 2020 - July 2023</Card.Header>
                                            <Card.Img variant="top" src={QMLogo}></Card.Img>
                                            <Card.Body>
                                                <Card.Title>BSc Computer Science - 1st Class Honours</Card.Title>
                                                <h6>Queen Mary University of London</h6>
                                                <Card.Text>
                                                    Key Modules:
                                                    <ul className='mt-1'>
                                                        <li>Algorithms and Data Structures</li>
                                                        <li>Big Data Processing</li>
                                                        <li>Distributed Systems</li>
                                                        <li>Object-Oriented Programming</li>
                                                        <li>Operating Systems</li>
                                                        <li>Security Engineering</li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                        <Card className='myCards mx-auto'>
                                            <Card.Header>September 2013 - August 2020</Card.Header>
                                            <Card.Img variant="top" src={KHSLogo} id='KHSLogo'></Card.Img>
                                            <Card.Body>
                                                <Card.Title>Secondary Education</Card.Title>
                                                <h6>Kingsbury High School</h6>
                                                <Card.Text>
                                                    A-Levels:
                                                    <ul className='mt-1'>
                                                        <li>Geography - A</li>
                                                        <li>Psychology - A</li>
                                                        <li>Sociology - A*</li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </CardGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
            <motion.footer initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='myAboutFooter'><PageFooter></PageFooter></motion.footer>
        </div>
    )
}