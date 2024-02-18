import { useParams } from "react-router-dom"
import { Carousel, CarouselCaption, Container,Image } from "react-bootstrap"
import { motion } from 'framer-motion'
import './Album.css'
import { Row, Col } from "react-bootstrap"

export const Album = () => {

     let { pictureName } = useParams()

    const FieldTrip = [{name: "Freshwater Bay- Start Point", date: "2nd February 2019", url: process.env.PUBLIC_URL + "/Photos/GeoTrip/Freshwater Bay- Start Point.jpg"},
        {name: "Mattiscombe Sands", date: "2nd February 2019", url: process.env.PUBLIC_URL + "/Photos/GeoTrip/Mattiscombe Sands.jpg"},
        {name: "Mattiscombe Sands", date: "2nd February 2019", url: process.env.PUBLIC_URL + "/Photos/GeoTrip/Mattiscombe Sands 2.jpg"},
    ]

    const UK = [         
        {name: "Windsor Castle", date: "19th July 2020", url: process.env.PUBLIC_URL + "/Photos/UK/Windsor Castle.jpg"},
        {name: "Mile End Park", date: "22nd March 2021", url: process.env.PUBLIC_URL + "/Photos/UK/Mile End Park.jpg"},
        {name: "Victoria Park", date: "22nd April 2021", url: process.env.PUBLIC_URL + "/Photos/UK/Victoria Park 2.jpg"},
        {name: "Victoria Park", date: "22nd April 2021", url: process.env.PUBLIC_URL + "/Photos/UK/Victoria Park.jpg"},
        {name: "221 Grove Road", date: "22nd April 2021", url: process.env.PUBLIC_URL + "/Photos/UK/221 Grove Road.jpg"},
        {name: "Holland Park", date: "2nd June 2021", url: process.env.PUBLIC_URL + "/Photos/UK/Holland Park.jpg"},
        {name: "Sky Garden", date: "25th August 2022", url: process.env.PUBLIC_URL + "/Photos/UK/Sky Garden 2.jpg"},
        {name: "Sky Garden", date: "25th August 2022", url: process.env.PUBLIC_URL + "/Photos/UK/Sky Garden.jpg"}
    ]

    const Vehicles = [
        {name: "2017 Ford GT", date: "19th September 2023", url: process.env.PUBLIC_URL + "/Photos/VED/Ford GT.jpg"},
        {name: "1969 Ford GT40", date: "19th September 2023", url: process.env.PUBLIC_URL + "/Photos/VED/Ford GT40.jpg"},
        {name: "1998 Paul Smith Mini", date: "19th September 2023", url: process.env.PUBLIC_URL + "/Photos/VED/Paul Smith Mini.jpg"},
        {name: "2019 Mustang", date: "19th September 2023", url: process.env.PUBLIC_URL + "/Photos/VED/Mustang.jpg"},
        {name: "1995 Caterham Seven (S3)", date: "10th October 2023", url: process.env.PUBLIC_URL + "/Photos/VED/Caterham.jpg"},
    ]

    const Seychelles = [
        {name: "Procession - Victoria", date: "2nd July 2023", url: process.env.PUBLIC_URL + "/Photos/Seychelles/Procession.jpg"},
        {name: "L'Union Estate Park", date: "3rd July 2023", url: process.env.PUBLIC_URL + "/Photos/Seychelles/LUnion Estate Park.jpg"},
        {name: "La Digue Island Lodge", date: "3rd July 2023", url: process.env.PUBLIC_URL + "/Photos/Seychelles/La Digue Island Lodge.jpg"},
    ]

    const Gujarat = [
        {name: "Baladia", date: "27th August 2023", url: process.env.PUBLIC_URL + "/Photos/Gujarat/Baladia.jpg"},
        {name: "Shree Swaminarayan Temple- Mandvi", date: "31st August 2023", url: process.env.PUBLIC_URL + "/Photos/Gujarat/Mandvi Mandir.jpg"},
        {name: "Shree Swaminarayan Temple- Bhuj", date: "1st September 2023", url: process.env.PUBLIC_URL + "/Photos/Gujarat/Bhuj Mandir.jpg"}

    ]

    var photos = []

    pictureName===":Vehicles" ? photos=Vehicles : photos=FieldTrip
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
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="Album">
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
    )
}