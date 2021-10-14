import React from 'react';
import './Login.css'
import logo from '../../Components/Header/logo2.png'
import { Form ,Button, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FirebaseAuth from './../../Firebase/Firebase.authentication';

const Login = () => {

    const {email, password, getEmail, getPassword, login, user, googleSignIn, githubSignIn} = FirebaseAuth()

    return (
        <div className="signup">
        <div className="signup-inner d-grid">
          <img src={logo} alt="" />
  
          <Form>
  
            <Form.Group className="mb-3" controlId="forEmail">
              <Form.Control onChange={getEmail} type="email" placeholder="Email" />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control onChange={getPassword} type="password" placeholder="Password" />
            </Form.Group>
  
            <div className="d-grid gap-2">
              <Button onClick={login} variant="danger">Login</Button>
            </div>
          </Form>
          <p className="existing">
             <Link to="/signup"> Not Registered Yet?</Link>
          </p>

          <div className="alternative">
              <div>
                  <hr />
              </div>
              <div>
                  <h6>or </h6>
              </div>
              <div>
                  <hr />
              </div>
          </div>

          <div className="sign-in-button">
          <Button onClick={googleSignIn} variant="danger">Sign in with Google </Button> 
          <Button onClick={githubSignIn} variant="danger">Sign in with Github </Button>
          </div>

        </div>
      </div>
    );
};

export default Login;