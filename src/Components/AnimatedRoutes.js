import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './Home.js'
import { About } from './About.js'
import { Gallery } from './Gallery.js'
import { Skills } from './Skills.js'
import { AnimatePresence } from "framer-motion";
import { Album } from './Album.js';
import { Resources} from './Resources.js';
import { Books } from './ResourceComponents/Books.js';
import { Shared } from './ResourceComponents/Shared.js'
import { Projects} from './Projects.js'

export const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/Album/:pictureName" element={<Album/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Books" element={<Books/>}></Route>
                <Route path="/Gallery" element={<Gallery/>}/>
                <Route path="/Projects" element={<Projects/>}></Route>
                <Route path="/Resources" element={<Resources/>}/>
                <Route path="/Shared" element={<Shared/>}></Route>
                <Route path="/Skills" element={<Skills/>}/>
            </Routes>
        </AnimatePresence>
    )
}