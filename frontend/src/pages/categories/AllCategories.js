import React, { useState } from "react";

const AllCategories = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log("Category Name:", categoryName);
    // Reset the form
    setCategoryName("");
  };

  return (
    <div>
      <h1>Create Category</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Category Name:
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AllCategories;
