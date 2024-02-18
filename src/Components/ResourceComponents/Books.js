import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Books.css'
import FGP from '../../Images/Books/Feel Good Productivity.jpg';
import Card from 'react-bootstrap/Card';
import Goal from '../../Images/Books/The Goal.jpg'
import CardGroup from 'react-bootstrap/CardGroup';
import { PageNavbar } from '../PageNavbar.js';

export const Books = () => {
    return (
        <div>
            <PageNavbar></PageNavbar>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="Books">
                <Container fluid>
                    <h6 className="display-6">Recommendations:</h6>
                    <Row className="gy-3">
                        <Col>    
                            <CardGroup>
                                <Card className="bookCards">
                                    <a href="https://www.amazon.co.uk/Feel-Good-Productivity-Achieve-More-Matters/dp/184794373X" target="_blank" rel="noopener noreferrer"><Card.Img variant="top" src={FGP} className="bookImages" alt="Feel Good Productivity"></Card.Img></a>
                                    <Card.Body>
                                        <Card.Title>Feel Good Productivity</Card.Title>
                                        <h6>Ali Abdaal</h6>
                                        <Card.Text>
                                            Ali's ultimate guide to beating procrastination and fulfilling your productivity goals! 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="bookCards">
                                    <a href="https://www.amazon.co.uk/Goal-Process-Ongoing-Improvement-Anniversary/dp/B00IFW99Z2/ref=sr_1_6?crid=29S616ZGAD1WW&keywords=the+goal&qid=1704745136&sprefix=th%2Caps%2C447&sr=8-6" target="_blank" rel="noopener noreferrer"><Card.Img variant="top" src={Goal} className="bookImages" alt="The Goal"></Card.Img></a>
                                    <Card.Body>
                                        <Card.Title>The Goal</Card.Title>
                                        <h6>Eliyahu M. Goldratt</h6>
                                        <Card.Text>
                                            A brilliant tale of how a manager transforms his failing manufacturing plant within 3 months. Also, facing various personal challenges along the way.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Col> 
                    </Row>
                </Container>
            </motion.div>
        </div>        
    )
}