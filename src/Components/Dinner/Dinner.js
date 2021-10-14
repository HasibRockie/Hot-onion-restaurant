import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Lunch/Lunch.css'

const Dinner = () => {
  const [lunchItems, setLunchItems] = useState([]);

  useEffect(() => {
    fetch("./APIs/dinner.json")
      .then((res) => res.json())
      .then((data) => setLunchItems(data));
  }, []);
  return (
    <div className='items-container'>
      {lunchItems.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  );
};

const Item = (props) => {
    const { name,image, id, price } = props.item;
    const url = `/items/${id}`
    return (
      <div className="item">
       <Link to={url}>
       <img src={image} alt="" />
        <h6 className='item-name'>{name}</h6>
        <h5>$ {price}</h5>
       </Link>
      </div>
    );
};

export default Dinner;
