import axios from "axios";
import React, { useEffect, useState } from "react";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await axios.get("http://localhost:3000/category");
    console.log(res);
    setCategories(res.data);
  }, []);
  return (
    <div>
      <h1>All Categories</h1>
      <a href="/categories/add">Add Category</a>
    </div>
  );
};

export default AllCategories;
