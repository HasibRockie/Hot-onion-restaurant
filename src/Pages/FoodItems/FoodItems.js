import React from 'react';
import Breakfast from '../../Components/Breakfast/Breakfast';
import './FoodItems.css'
import Lunch from './../../Components/Lunch/Lunch';
import Dinner from './../../Components/Dinner/Dinner';

const FoodItems = () => {
    return (
        <div>
            <br /><br /><br />
            <div className="breakfast-items food-item">
                <h4 className="food-item-title">Breakfast</h4>
                <Breakfast></Breakfast>
            </div>
            <hr />
            <div className="lunch-items food-item">
                <h4 className="food-item-title">Lunch</h4>
                <Lunch></Lunch>
            </div>
            <hr />
            <div className="dinner-items food-item">
                <h4 className="food-item-title">Dinner</h4>
                <Dinner></Dinner>
            </div>
        </div>
    );
};

export default FoodItems;