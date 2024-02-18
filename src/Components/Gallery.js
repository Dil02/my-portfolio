import './Gallery.css'
import { Row, Container, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'


export const Gallery = () => {

    let navigate = useNavigate()
    
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='Gallery mb-2'>
            <Container fluid>
                <Row>
                    <Col>
                        <Row>
                            <Col><motion.img src={process.env.PUBLIC_URL + "/Photos/GeoTrip/Mattiscombe Sands.jpg"} alt="Geo Trip" className='Landscape' onClick={() => {navigate("/Album/:Geography Field Trip")}} whileHover={{scale: 1.02}}></motion.img></Col>
                        </Row>
                        <Row className='mt-4'>
                            <Col><motion.img src={process.env.PUBLIC_URL + "/Photos/Seychelles/LUnion Estate Park.jpg"} alt="Seychelles" className='Landscape' onClick={() => {navigate("/Album/:Seychelles")}} whileHover={{scale: 1.02}}></motion.img></Col>
                        </Row>
                        <Row className='mt-4'>
                            <Col><motion.img src={process.env.PUBLIC_URL + "/Photos/UK/Victoria Park.jpg"} alt="UK" className='Landscape' onClick={() => {navigate("/Album/:UK")}} whileHover={{scale: 1.02}}></motion.img></Col>
                        </Row>
                    </Col>
                    <Col><motion.img src={process.env.PUBLIC_URL + "/Photos/Gujarat/Bhuj Mandir.jpg"} alt="Gujarat" className='Portrait' onClick={() => {navigate("/Album/:Gujarat")}} whileHover={{scale: 1.02}}></motion.img></Col>
                    <Col><motion.img src={process.env.PUBLIC_URL + "/Photos/VED/Ford GT.jpg"} alt="VED" className='Portrait' onClick={() => {navigate("/Album/:Vehicles")}} whileHover={{scale: 1.02}}></motion.img></Col>
                </Row>
            </Container>
        </motion.div>
    )
}