import React, { useEffect, useState } from "react";
import "../Lunch/Lunch.css";
import "./Blogs.css";

const Blogs = () => {
  const [lunchItems, setLunchItems] = useState([]);

  useEffect(() => {
    fetch("./APIs/blogs.json")
      .then((res) => res.json())
      .then((data) => setLunchItems(data));
  }, []);
  return (
    <div className="blogs-container">
        <hr />
        <h1>Why You Choose Us! </h1>
      <div className="items-container">
        {lunchItems.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

const Item = (props) => {
  const { title, image, description } = props.item;
  return (
    <div className="item blogs">
      <img src={image} alt="" />
      <h6 className="item-title">{title}</h6>
      <h5 className="blogs-decription">{description}</h5>
    </div>
  );
};

export default Blogs;
