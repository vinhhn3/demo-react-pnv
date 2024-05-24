import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useHistory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const res = await axios.get("http://localhost:3000/category");
    console.log(res);
    setCategories(res.data);
  };
  return (
    <div>
      <h1>All Categories</h1>
      <Link to="/categories/add">Add Category</Link>
    </div>
  );
};

export default AllCategories;
