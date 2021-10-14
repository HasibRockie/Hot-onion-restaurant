import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Components/Header/logo2.png";
import "./Signup.css";
import FirebaseAuth from './../../Firebase/Firebase.authentication';


const Signup = () => {
    const {getName, getEmail, getPassword, register} = FirebaseAuth()

  return (
    <div className="signup">
      <div className="signup-inner d-grid">
        <img src={logo} alt="" />

        
          <Form.Group className="mb-3" controlId="formBasicName" >
            <Form.Control onChange={getName} type="name" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={getEmail} type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control onChange={getPassword} type="password" placeholder="Password" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button onClick={register} variant="danger">submit</Button>
          </div>
        
        <p className="existing">
           <Link to="/login"> Already have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
