import { useParams } from "react-router-dom"
import { PageNavbar } from './PageNavbar'
import { Carousel, CarouselCaption, Container,Image } from "react-bootstrap"
import { motion } from 'framer-motion'
import './Album.css'
import { PageFooter } from "./PageFooter"
import { Row, Col } from "react-bootstrap"

export const Album = () => {

     let { pictureName } = useParams()

    const GeoTrip = [{name: "Freshwater Bay- Start Point", date: "2nd February 2019", url: "/Photos/GeoTrip/Freshwater Bay- Start Point.jpg"},
        {name: "Mattiscombe Sands", date: "2nd February 2019", url: "/Photos/GeoTrip/Mattiscombe Sands.jpg"},
        {name: "Mattiscombe Sands", date: "2nd February 2019", url: "/Photos/GeoTrip/Mattiscombe Sands 2.jpg"},
    ]

    const UK = [         
        {name: "Windsor Castle", date: "19th July 2020", url: "/Photos/UK/Windsor Castle.jpg"},
        {name: "Mile End Park", date: "22nd March 2021", url: "/Photos/UK/Mile End Park.jpg"},
        {name: "Victoria Park", date: "22nd April 2021", url: "/Photos/UK/Victoria Park 2.jpg"},
        {name: "Victoria Park", date: "22nd April 2021", url: "/Photos/UK/Victoria Park.jpg"},
        {name: "221 Grove Road", date: "22nd April 2021", url: "/Photos/UK/221 Grove Road.jpg"},
        {name: "Holland Park", date: "2nd June 2021", url: "/Photos/UK/Holland Park.jpg"},
        {name: "Sky Garden", date: "25th August 2022", url: "/Photos/UK/Sky Garden 2.jpg"},
        {name: "Sky Garden", date: "25th August 2022", url: "/Photos/UK/Sky Garden.jpg"}
    ]

    const VED = [
        {name: "2017 Ford GT", date: "19th September 2023", url: "/Photos/VED/Ford GT.jpg"},
        {name: "1969 Ford GT40", date: "19th September 2023", url: "/Photos/VED/Ford GT40.jpg"},
        {name: "1998 Paul Smith Mini", date: "19th September 2023", url: "/Photos/VED/Paul Smith Mini.jpg"},
        {name: "2019 Mustang", date: "19th September 2023", url: "/Photos/VED/Mustang.jpg"},
        {name: "1995 Caterham Seven (S3)", date: "10th October 2023", url: "/Photos/VED/Caterham.jpg"},
    ]

    const Seychelles = [
        {name: "Procession - Victoria", date: "2nd July 2023", url: "/Photos/Seychelles/Procession.jpg"},
        {name: "L'Union Estate Park", date: "3rd July 2023", url: "/Photos/Seychelles/LUnion Estate Park.jpg"},
        {name: "La Digue Island Lodge", date: "3rd July 2023", url: "/Photos/Seychelles/La Digue Island Lodge.jpg"},
    ]

    const Gujarat = [
        {name: "Baladia", date: "27th August 2023", url: "/Photos/Gujarat/Baladia.jpg"},
        {name: "Shree Swaminarayan Temple- Mandvi", date: "31st August 2023", url: "/Photos/Gujarat/Mandvi Mandir.jpg"},
        {name: "Shree Swaminarayan Temple- Bhuj", date: "1st September 2023", url: "/Photos/Gujarat/Bhuj Mandir.jpg"}

    ]

    var photos = []

    pictureName===":VED" ? photos=VED : photos=GeoTrip
    if(pictureName===":UK"){
        photos=UK
    }
    else if(pictureName===":Gujarat"){
        photos=Gujarat
    }
    else if(pictureName===":Seychelles"){
        photos=Seychelles
    }
    
    



    return (
        <div className="Album">
            <PageNavbar></PageNavbar>
            <motion.div className="myAlbum" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <Container>
                    <Row>
                        <Col>
                            <h6 className="albumName display-6">{pictureName.substring(1)}</h6>
                            <Carousel  data-bs-theme="dark" pause="hover" interval={3000} className="myCarousel">
                            {photos.map((photo, key) => {
                            return (
                                    <Carousel.Item key={key}>
                                        <Image className="myAlbumImages" fluid src={photo.url}></Image>
                                        <div className="myCaption">
                                            <h4>{photo.name}</h4>
                                            <p>{photo.date}</p>
                                        </div>
                                        <CarouselCaption>
                                        </CarouselCaption>
                                    </Carousel.Item>
                                    )})}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
            <motion.footer className="myAlbumFooter"><PageFooter></PageFooter></motion.footer>
        </div>
    )
}