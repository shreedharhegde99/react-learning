import React from "react";


export const ListItem = ({ item, id,handleDelete,handleToggle }) => {
  const style = {};
  if (item.status) {
    style.color = "green";
  } else {
    style.color = "red";
  }

  return (
    <>
      <div style={{ display: "flex", ...style }}>
        <div key={id} onClick={() => handleToggle(item.id)}>
          <p>{item.title}</p>
        </div>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </div>
    </>
  );
};
