import React from 'react';
import './404.css';
import notfound404 from './home.jpg'

const NotFound = () => {
    return (
        <div>
            <img className="not-found" src={notfound404} alt="" />
        </div>
    );
};

export default NotFound;