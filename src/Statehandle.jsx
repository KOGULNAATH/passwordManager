import React, { useState } from 'react'
import './Body.css'
import Img from './gt1.jpg'
const Statehandle = () => {
        const [like,setLike]=useState(0)
        const [name ,setName] = useState("Hii welcome to our website")
        function change()
        {
          setName("KOGULNAATH AS")
        }
        function old()
        {
          setName("Hii welcome to our webssite")
        }
        function increment()
        {
            setLike(like+1)
        }
        function decrement()
        {
            if(like>0)
                setLike(like-1)
        }
    return (
        <div>
          <center>
            <h1 onMouseEnter={change} onMouseLeave={old}>{name}</h1>
          </center>
            <img src={Img} alt="" height="500px"  />
            
            <p>
                {like}
            </p>
            <button onClick={increment}>Like</button>
            <button onClick={decrement}>Dislike</button>
        </div>
    )
}

export default Statehandle