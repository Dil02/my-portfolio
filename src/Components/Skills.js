import { PageNavbar } from "./PageNavbar";
import { PageFooter } from './PageFooter';
import { motion } from "framer-motion";
import { Chart } from 'react-google-charts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion  from "react-bootstrap/Accordion";
import './Skills.css';

export const Skills = () => {

    return(
        <div className="Skills">
            <PageNavbar></PageNavbar>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <Container>
                    <h1 className="display-4">Technical Skills</h1>
                    <Row>
                        <h3>Web Development</h3>
                        <Col>
                            <Accordion defaultActiveKey="0" className="myAccordion">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>HTML, CSS, JavaScript</Accordion.Header>
                                    <Accordion.Body>
                                        Examples:
                                        <ul>
                                            <li>Auction App</li>
                                            <li>Weather App</li>
                                            <li>Mentor Matching App</li>
                                            <li>Portfolio Website</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col>
                            <Chart chartType="PieChart"
                            data={[
                                ["Language","Rating out of 10"],
                                ["HTML",7],
                                ["CSS",6],
                                ["JavaScript",4],
                            ]} 
                            options={{
                                title: "Skill Rating",
                                legend: "none",
                                pieHole: 0.4,
                                colors: ['#0099C6','#329262','#dd4477'],
                                pieSliceText: 'label',
                                tooltip: {text: 'value'}, 
                            }} 
                            width={"100%"} height={"400px"}/>
                        </Col>
                    </Row>

                    <div className="myDivider"></div>

                    <Row className="mt-4">
                        <h3>Libraries & Frameworks</h3>
                        <Col>
                            <Chart chartType="PieChart" 
                            data={    [
                                ["Language","Rating out of 10"],
                                ["Bootstrap", 8],
                                ["Django", 3],
                                ['Firebase', 6],
                                ['React', 4],
                                ['Framer',3],
                                ['Vue', 2],
                                
                            ]} 
                            options={{
                                title: "Skill Rating",
                                legend: "none",
                                pieHole: 0.4,
                                colors: ['#ef476f','#f78c6b','#ffd166','#06d6a0','#118ab2','#073b4c'],
                                pieSliceText: 'label',
                                tooltip: {text: 'value'}, 
                            }} 
                            width={"100%"} height={"400px"}/>
                        </Col>

                        <Col>
                            <Accordion defaultActiveKey="0" className="myAccordion">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Bootstrap</Accordion.Header>
                                    <Accordion.Body>
                                        Examples:
                                        <ul>
                                            <li>Mentor Matcher</li>
                                            <li>Portfolio Website</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Django</Accordion.Header>
                                    <Accordion.Body>
                                        Examples:
                                        <ul>
                                            <li>Auction App</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Firebase</Accordion.Header>
                                    <Accordion.Body>
                                        Examples:
                                        <ul>
                                            <li>Mentor Matcher App</li>
                                            <li>MyAdherence</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>React</Accordion.Header>
                                    <Accordion.Body>
                                        Examples:
                                        <ul>
                                            <li>Mentor Matcher App</li>
                                            <li>Weather App</li>
                                            <li>Portfolio Website</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Vue</Accordion.Header>
                                    <Accordion.Body>
                                        Examples:
                                        <ul>
                                            <li>Auction App</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Framer Motion</Accordion.Header>
                                    <Accordion.Body>
                                        Examples:
                                        <ul>
                                            <li>Portfolio Website</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </Col>

                    </Row>

                    <div className="myDivider"></div>

                    <Row className="mt-4">
                        <h3>Object Oriented</h3>
                        <Col>
                            <Accordion defaultActiveKey="0" className="myAccordion">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Java</Accordion.Header>
                                    <Accordion.Body>
                                        Examples:
                                        <ul>
                                            <li>Pointless</li>
                                            <li>An Adventure</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Python</Accordion.Header>
                                    <Accordion.Body>
                                        Examples:
                                        <ul>
                                            <li>Auction App (Backend)</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col>
                            <Chart chartType="PieChart" 
                            data={    [
                                ["Language","Rating out of 10"],
                                ["Java", 5],
                                ["Python", 5],
                            ]} 
                            options={{
                                title: "Skill Rating",
                                legend: "none",
                                pieHole: 0.4,
                                colors: ['#83c5be','#ffd166'],
                                pieSliceText: 'label',
                                tooltip: {text: 'value'}, 
                            }} 
                            width={"100%"} height={"400px"}/>
                        </Col>

                    </Row>

                    <div className="myDivider"></div>

                    <Row className="mt-4">
                        <h3>Mobile Development</h3>
                        <Col>
                            <Chart chartType="PieChart" 
                            data={    [
                                ["Language","Rating out of 10"],
                                ["Kotlin", 3],
                                ["Jetpack", 3],
                            ]} 
                            options={{
                                title: "Skill Rating",
                                legend: "none",
                                pieHole: 0.4,
                                colors: ['#26547c','#ef476f'],
                                pieSliceText: 'label',
                                tooltip: {text: 'value'}, 
                            }} 
                            width={"100%"} height={"400px"}/>
                        </Col>

                        <Col>
                            <Accordion defaultActiveKey="0" className="myAccordion">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Kotlin & Jetpack Compose</Accordion.Header>
                                    <Accordion.Body>
                                        Examples:
                                        <ul>
                                            <li>MyAdherence</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>

                    </Row>

                    <div className="myDivider"></div>

                    <Row className="mt-4">
                        <h3>Other</h3>
                        <Col>
                            <Accordion defaultActiveKey="0" className="myAccordion">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>SQL</Accordion.Header>
                                    <Accordion.Body>
                                        Examples:
                                        <ul>
                                            <li>Auction App</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>UML</Accordion.Header>
                                    <Accordion.Body>
                                        Examples:
                                        <ul>
                                            <li>MyAdherence</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col>
                            <Chart chartType="PieChart" 
                            data={    [
                                ["Language","Rating out of 10"],
                                ["SQL", 2],
                                ["UML", 5],
                            ]} 
                            options={{
                                title: "Skill Rating",
                                legend: "none",
                                pieHole: 0.4,
                                colors: ['#f1515e','#1dbde6'],
                                pieSliceText: 'label',
                                tooltip: {text: 'value'}, 
                            }} 
                            width={"100%"} height={"400px"}/>
                        </Col>
                    </Row>

                </Container>
            </motion.div>
            <motion.footer initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='mySkillsFooter'><PageFooter></PageFooter></motion.footer>
        </div>
    )
}