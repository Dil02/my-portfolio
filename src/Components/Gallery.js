import './Gallery.css'
import { Row, Container, Col } from "react-bootstrap"
import { PageNavbar } from "./PageNavbar"
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'
import { PageFooter } from "./PageFooter"


export const Gallery = () => {

    let navigate = useNavigate()
    
    return (
        <div className='Gallery'>
            <PageNavbar></PageNavbar>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <Container fluid>
                    <Row>
                        <Col>
                            <Row>
                                {/* <Col><h1 className='display-4 text-center'>Gallery</h1></Col> */}
                                <Col><motion.img src={"/Photos/GeoTrip/Mattiscombe Sands.jpg"} alt="Geo Trip" className='Landscape' onClick={() => {navigate("/Album/:GeoTrip")}} whileHover={{scale: 1.02}}></motion.img></Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col><motion.img src={"/Photos/Seychelles/LUnion Estate Park.jpg"} alt="Seychelles" className='Landscape' onClick={() => {navigate("/Album/:Seychelles")}} whileHover={{scale: 1.02}}></motion.img></Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col><motion.img src={"/Photos/UK/Victoria Park.jpg"} alt="UK" className='Landscape' onClick={() => {navigate("/Album/:UK")}} whileHover={{scale: 1.02}}></motion.img></Col>
                            </Row>
                        </Col>
                        <Col><motion.img src="/Photos/Gujarat/Bhuj Mandir.jpg" alt="Gujarat" className='Portrait' onClick={() => {navigate("/Album/:Gujarat")}} whileHover={{scale: 1.02}}></motion.img></Col>
                        <Col><motion.img src="/Photos/VED/Ford GT.jpg" alt="VED" className='Portrait' onClick={() => {navigate("/Album/:VED")}} whileHover={{scale: 1.02}}></motion.img></Col>
                    </Row>
                </Container>
            </motion.div>
            <motion.footer className='myGalleryFooter' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}><PageFooter></PageFooter></motion.footer>
        </div>
    )

    
}