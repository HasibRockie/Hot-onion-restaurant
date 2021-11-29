
import React from 'react';
import Blogs from '../../Components/Blogs/Blogs';
import HomeCover from '../../Components/HomeCover/HomeCover';
import ItemsTab from '../../Components/ItemsTab/ItemsTab';
import './Home.css'

const Home = () => {
    return (
        <div>
            <HomeCover></HomeCover> 
            <ItemsTab></ItemsTab>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;