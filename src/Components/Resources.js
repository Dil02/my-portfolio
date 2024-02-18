import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom"
import "./Resources.css";

export const Resources = () => {

    let navigate = useNavigate()

    return(
        <motion.div className="Resources">
            <Container>
                <Row>
                    <Col><motion.h1 className="display-1 mt-1" whileHover={{scale: 1.25}} onClick={() => {navigate("/Books")}} initial={{translateX: -100}} animate={{translateX: 0, transition:{ duration: 0.8}}}>Books</motion.h1></Col>
                    <Col><motion.h1 className="display-1 mt-1" whileHover={{scale: 1.25}} onClick={() => {navigate("/Shared")}} initial={{translateX: 100}} animate={{translateX: 0, transition:{ duration: 0.8}}}>Explanations</motion.h1></Col>                        
                </Row>
                <Row>
                    <Col><motion.h1 className="display-1 mt-1" whileHover={{scale: 1.25}} onClick={() => {navigate("/Shared")}} initial={{translateX: -100}} animate={{translateX: 0, transition:{ duration: 0.8}}}>Finance</motion.h1></Col>
                    <Col><motion.h1 className="display-1 mt-1" whileHover={{scale: 1.25}} onClick={() => {navigate("/Shared")}} initial={{translateX: 100}} animate={{translateX: 0, transition:{ duration: 0.8}}}>Programming</motion.h1></Col>
                </Row>
                <Row>
                    <Col><motion.h1 className="display-1 mt-1" whileHover={{scale: 1.25}} onClick={() => {navigate("/Shared")}} initial={{translateX: -100}} animate={{translateX: 0, transition:{ duration: 0.8}}}>Productivity</motion.h1></Col>
                    <Col><motion.h1 className="display-1 mt-1" whileHover={{scale: 1.25}} onClick={() => {navigate("/Shared")}} initial={{translateX: 100}} animate={{translateX: 0, transition:{ duration: 0.8}}}>Utilities</motion.h1></Col>
                </Row>
            </Container>
        </motion.div>
    )
}