import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
    return (
        <div className="container">
            <h3>Welcome to our friends site </h3>
            <Link to="/all">See all users</Link>
        </div>
    )
}