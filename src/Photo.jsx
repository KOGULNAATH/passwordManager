import React, { useState } from 'react'
import './Body.css'
import Img from './gt1.jpg'
import Img from './royal.jpg'
const Photo = () => {
    const [image, setImage] =useState(Img)

     changer = function ()
    {
        setImage(gt1)
        setImage(roayl)
    }
    return
    (
        <div>
            <img src={image} alt="Kogul" onMouseEnter={changer} />
        </div>
    )
}