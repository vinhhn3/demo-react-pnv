import React from "react";

const Body = () => {
  const data = [
    { id: 1, title: "Sample Item 1" },
    { id: 2, title: "Sample Item 2" },
    { id: 3, title: "Sample Item 3" },
  ];

  return (
    <div>
      <h1>Body Component</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
