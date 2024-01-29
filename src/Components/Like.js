import './Like.css'
import { useState } from 'react';
import HeartOutlined from '../Images/Assets/HeartOutline.png'
import Heart from '../Images/Assets/Heart.png'

export const Like = () => {
    const [likes, setLikes] = useState(0)
    const [show, setShow] = useState(true)

    const likePage = () => {
        setLikes(likes + 1)
        setShow(false)
    }

    const unlikePage = () => {
        setLikes(likes - 1)
        setShow(true)
    }

    return (
        <div class="Like">
            {show && <input type="image" alt="Like Button" src={HeartOutlined} class="icons" onClick={likePage}/> } 
            {!show && <input type="image" alt="Like Button" src={Heart} class="icons" onClick={unlikePage}/>}
            <h6>{likes}</h6>
        </div>
    )
}