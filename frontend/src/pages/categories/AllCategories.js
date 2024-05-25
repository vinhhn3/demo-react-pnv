import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AllCategories = () => {
  const [count, setCount] = useState(0); // [0, function(){}
  const [count2, setCounts2] = useState(0);
  const [categories, setCategories] = useState([]);
  const navigate = useHistory();
  const value = false;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getCategories();
  }, []);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const getCategories = async () => {
    const res = await axios.get("http://localhost:3000/category");
    console.log(res);
    setCategories(res.data);
  };
  return (
    <div>
      y<h1>All Categories</h1>
      <Link to="/categories/add">Add Category</Link>
      <button onClick={increaseCount}>Increase count</button>
    </div>
  );
};

export default AllCategories;
