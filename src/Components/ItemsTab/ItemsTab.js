import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Lunch from "../Lunch/Lunch";
import Breakfast from '../Breakfast/Breakfast';
import './ItemsTab.css'
import Dinner from './../Dinner/Dinner';

const ItemsTab = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="breakfast"
        id="uncontrolled-tab-example"
        className="item-tabs"
      >
        <Tab eventKey="breakfast" title="Breakfast">
          <Breakfast></Breakfast>
        </Tab>
        <Tab eventKey="lunch" title="Lunch">
        <Lunch></Lunch>
        </Tab>
        <Tab eventKey="dinner" title="Dinner">
        <Dinner></Dinner>
        </Tab>
      </Tabs>

      <button className="btn btn-danger">Checkout Your Food</button>
    </div>
  );
};

export default ItemsTab;
