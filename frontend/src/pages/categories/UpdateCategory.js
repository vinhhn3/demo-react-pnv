import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function UpdateCategory() {
  const { id } = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const res = await axios.get(`http://localhost:3000/category/${id}`);
    console.log(res);
    setCategory(res.data);
  };

  const updateCategory = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:3000/category/${id}`,
      category
    );
    getCategory();
  };

  return (
    <div>
      <h1>Update Category</h1>
      <form>
        <label htmlFor="name">Category name</label>
        <input
          onChange={(e) => {
            setCategory({ ...category, name: e.target.value });
          }}
          type="text"
          id="name"
          value={category.name}
        />
        <button onClick={updateCategory}>Update</button>
      </form>
    </div>
  );
}

export default UpdateCategory;
