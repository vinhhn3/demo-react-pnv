import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

function DetailCategory() {
  const [category, setCategory] = useState({});
  const { id } = useParams();
  const navigate = useHistory();

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const res = await axios.get(`http://localhost:3000/category/${id}`);
    console.log(res);

    setCategory(res.data);
  };

  const deleteCategory = async () => {
    const res = await axios.delete(`http://localhost:3000/category/${id}`);
    alert("Delete OK !!!");
    navigate.push("/categories/all");
  };

  return (
    <div>
      <h1>Detail category</h1>
      <p>Category name: {category.name}</p>
      <button onClick={deleteCategory}>Delete the category</button>
    </div>
  );
}

export default DetailCategory;
