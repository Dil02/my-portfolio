import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion";
import GitHub from '../Images/Assets/github.png';
import Email from '../Images/Assets/email.png';
import LinkedIn from '../Images/Assets/linkedin.png';
import Instagram from '../Images/Assets/instagram.png';

export const Home = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="Home">
            <Container fluid>
                <Row>
                    <Col>
                        <motion.h1 className='display-1' animate={{scale: 1}} initial={{scale: 0}} transition={{delay: 1, type: "tween", duration: 1} }>
                            Dilkush Punja
                        </motion.h1>
                        <motion.figure class="mt-3" animate={{scale: 1}} initial={{scale: 0}} transition={{delay: 1.05, type: "tween", duration: 1} }>                            
                            <a href="mailto: pdilkush@gmail.com" target="_blank" rel="noopener noreferrer" class="socialLinks">
                                <motion.img src={Email} alt="Email" class="socialIcons" whileHover={{scale: 1.25}}></motion.img>
                            </a>
                            <a href="https://github.com/Dil02?tab=repositories" target="_blank" rel="noopener noreferrer" class="socialLinks">
                                <motion.img src={GitHub} alt="GitHub" class="socialIcons" whileHover={{scale: 1.25}}></motion.img>
                            </a>
                            <a href="https://www.instagram.com/_dilkushp/" target="_blank" rel="noopener noreferrer" class="socialLinks">
                                <motion.img src={Instagram} alt="Instagram" class="socialIcons" whileHover={{scale: 1.25}}></motion.img>
                            </a>
                            <a href="https://www.linkedin.com/in/dilkush-p-3844981b8/" target="_blank" rel="noopener noreferrer" class="socialLinks">
                                <motion.img src={LinkedIn} alt="LinkedIn" class="socialIcons" whileHover={{scale: 1.25}}></motion.img>
                            </a>                
                        </motion.figure>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}