import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome! Check out the <Link to='/gallery'>Gallery</Link>!</p>
            
        </div>
    )
}

export default Home;