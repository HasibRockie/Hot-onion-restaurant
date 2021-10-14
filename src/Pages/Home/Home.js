
import React from 'react';
import Blogs from '../../Components/Blogs/Blogs';
import HomeCover from '../../Components/HomeCover/HomeCover';
import ItemsTab from '../../Components/ItemsTab/ItemsTab';
import './Home.css'
import FirebaseAuth from './../../Firebase/Firebase.authentication';

const Home = () => {
    const {name, email, password, user, loggedIn} = FirebaseAuth()
    
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(user);
    console.log(loggedIn);
    return (
        <div>
            <HomeCover></HomeCover> 
            <ItemsTab></ItemsTab>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;