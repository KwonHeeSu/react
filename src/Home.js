import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = ()=>{
    const[message, setMessage] = useState("");
    useEffect(() => {
        fetch('/DayBridge/')
            .then(res=>res.text())
            .then(m=>{setMessage(m)})
    }, []);

    return(
        <div>
            쟤네 왜저래...
            <div>{message}</div>
        </div>
    )
}

export default Home;