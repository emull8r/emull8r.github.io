import React from 'react';
import {useHistory} from 'react-router-dom'

const Home = () => {
    let history = useHistory()
    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=>history.push('/emull8r.github.io/about')}>Click here</button>
        </div>
    )
}

export default Home;