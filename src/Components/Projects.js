import { Row, Container, Col } from "react-bootstrap"
import "./Projects.css"
import Pointless from '../Images/Assets/pointless.png';
import AnAdventure from '../Images/Assets/an adventure.png';
import MyAdherence1 from '../Images/Assets/MyAdherence1.jpg';
import MyAdherence2 from '../Images/Assets/MyAdherence2.jpg';
import { motion } from 'framer-motion'
import MentorMatcher from '../Videos/Mentor Matcher.mp4';

export const Projects = () => {
    return(            
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="Projects">
            <Container>
                <Row id="Individual">
                    <h6 className="display-6 projectTypes">Individual Projects</h6>
                    <Col>
                        <Row>
                            <Col lg={6}>
                                <h4>MyAdherence</h4>
                                <p>MyAdherence was developed alongside my undergraduate dissertation which explored using Near-Field Communication technology
                                    and Gamification to monitor medication adherence. Through the use of an Android app, users were able to add medication
                                    and records dosages simply by tapping their mobile device against medication packaging, which incorporated an NFC sticker.
                                    Gamification elements were introduced to increase user retention and encourage individuals to record their adherence levels.
                                </p>
                                <p>Involved:</p>
                                <ul>
                                    <li>Android Studio</li>
                                    <li>Firebase</li>
                                    <li>Hilt Dependency Injection</li>
                                    <li>Jetpack Compose</li>
                                    <li>Kotlin</li>
                                    <li>NXP-NTAG213 NFC Tags</li>
                                    <li>Object Oriented Programming</li>
                                </ul>
                                <p><a href="https://github.com/Dil02/myadherence" target="_blank" rel="noopener noreferrer">Access the repository here.</a></p>
                            </Col>
                            <Col lg={3}>
                                <img class="img-fluid myAdherenceImage mb-3 myProjectsImages" src={MyAdherence1} alt="MyAdherence"></img>
                            </Col>
                            <Col lg={3}>
                                <img class="img-fluid myAdherenceImage myProjectsImages" src={MyAdherence2} alt="MyAdherence"></img>
                            </Col>



                        </Row>

                        <Row className="mt-3">
                            <Col lg={8}>
                                <h4>Pointless</h4>
                                <p>Pointless is the first Java project I developed during the first semester of my degree.
                                    It resembles the popular BBC game show in which a contestant is awarded points based on the
                                    most correct unique answer. The aim is to choose an answer that is correct but is the 
                                    least popular response. To win the game you need to gain as few points as possible.
                                </p>
                                <p>Involved:</p>
                                <ul>
                                    <li>Abstract Data Types</li>
                                    <li>Arrays</li>
                                    <li>File I/O</li>
                                    <li>Sorting</li>
                                </ul>
                                <p><a href="https://github.com/Dil02/pointless" target="_blank" rel="noopener noreferrer">Access the repository here.</a></p>
                            </Col>
                            <Col lg={4} className="mt-3">
                                <img class="img-fluid myProjectsImages" src={Pointless} alt="Pointless"></img>
                            </Col>
                        </Row>

                        <Row className="mt-2">
                            <Col>
                                <h4>An Adventure</h4>
                                <p>'An Adventure' is a text based adventure game I developed in Java using Object Oriented principles. 
                                    The user travels around the world seeking the pieces of a mystical torch with the aim of 
                                    revealing the location of a great treasure!
                                </p>
                                <p>Involved:</p>
                                <ul>
                                    <li>Collections (ArrayLists)</li>
                                    <li>Exception Handling</li>
                                    <li>File I/O</li>
                                    <li>GUI</li>
                                    <li>Inheritance</li>
                                    <li>Music</li>
                                    <li>Polymorphism</li>
                                </ul>
                                <p><a href="https://github.com/Dil02/an-adventure" target="_blank" rel="noopener noreferrer">Access the repository here.</a></p>
                                <img class="img-fluid myProjectsImages" src={AnAdventure} alt="An Adventure"></img>
                            </Col>
                        </Row>

                    </Col>
                </Row>

                <Row id="Group" className="border-top border-primary mt-3">
                    <h6 className="display-6 projectTypes pt-3">Group Projects</h6>
                    <Col>
                        <Row>
                            <Col>
                                <h4>Mentor-Matcher</h4>
                                <p>Mentor-Matcher is an application developed for FDM, allowing employees to develop
                                    long-term professional partnerships within the company. Being a new employee to a firm can 
                                    be challenging and the application helps to ease the transition by bridging the
                                    experience and knowledge gap between experienced individuals and newcomers.
                                    Developed from the ground up over a 12 week period, involving a Domain Analysis, Requirements Analysis, Design and Prototype.
                                </p>

                                <p>Use cases implemented:</p>
                                <ul>
                                    <li>Edit Profile</li>
                                    <li>Login</li>
                                    <li>Mentor Selection</li>
                                    <li>Messaging Forum</li>                                        
                                    <li>Raise Tickets</li>
                                    <li>Registration</li>
                                    <li>View Mentees</li>
                                    <li>View Tickets</li>
                                </ul>

                                <p>Technologies used:</p>
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>CSS</li>
                                    <li>Firebase</li>
                                    <li>HTML</li>
                                    <li>Node.js</li>
                                    <li>npm</li>
                                    <li>React</li>
                                    
                                </ul>
                                <p><a href="https://github.com/Dil02/mentor-matcher" target="_blank" rel="noopener noreferrer">Access the repository here.</a></p>
                                
                                <video className="w-100" controls>
                                    <source
                                        src={MentorMatcher}
                                        type="video/mp4"
                                        allowFullScreen
                                    />
                                </video>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h4>Ride Weather</h4>
                                <p>With cycling becoming a more popular means of transport for students commuting, offering greater flexibility and being beneficial for 
                                    your health and wallet, we developed a suitable application to assist users.
                                    Our journey involved identifying our stakeholders, performing data collection to synthesise requirements including researching
                                    similar products, building the application and finally carrying out a heuristic evaluation.
                                </p>
                                <p>Key features:</p>
                                <ul>
                                    <li>Clothing recommendations</li>
                                    <li>Cycling and safety tips based on weather conditions</li>
                                    <li>GPS location</li>
                                    <li>Location search and favourites</li>
                                </ul>
                                <p>Technologies used:</p>
                                <ul>
                                    <li>CSS</li>
                                    <li>HTML</li>
                                    <li>Node.js</li>
                                    <li>npm</li>
                                    <li>Preact</li>
                                </ul>
                                <p><a href="https://github.com/Dil02/weather-app" target="_blank" rel="noopener noreferrer">Access the repository here.</a></p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h4>Auction App</h4>
                                <p>Developed an 'eBay' style website enabling users to advertise and bid on items. Django was utilised for the web API and the frontend was developed using Vue.
                                </p>
                                <p>Key features:</p>
                                <ul>
                                    <li>Search items</li>
                                    <li>Single page application</li>
                                    <li>Q&A for each item</li>
                                    <li>Upload images</li>
                                    <li>User profile</li>
                                </ul>
                                <p>Technologies used:</p>
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>CSS</li>
                                    <li>Django</li>
                                    <li>HTML</li>
                                    <li>Node.js</li>
                                    <li>npm</li>
                                    <li>Vue</li>
                                </ul>
                                <p><a href="https://github.com/Dil02/auction-app" target="_blank" rel="noopener noreferrer">Access the repository here.</a></p>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}