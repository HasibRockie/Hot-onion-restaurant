import React from "react";
import './HomeCover.css'
import { Button, FormControl, InputGroup } from "react-bootstrap";

const HomeCover = () => {
  return (
    <div className="home-head-container">
        <div className="home-head">
      <h1 className="banner-title">Best Food Waiting for Your Belly </h1>
      <InputGroup className="search-input">
        <FormControl
          placeholder="search the food"
          aria-label="search the food"
          aria-describedby="basic-addon2"
        />
        <Button variant="danger" id="button-addon2">
          Search 
        </Button>
      </InputGroup>
    </div>
    </div>
  );
};

export default HomeCover;
