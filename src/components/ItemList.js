import React from "react";

function ItemList({ data, title, onSelectItem }) {
  return (
    <main className="menu">
      <h2>{title}</h2>
      <ul className="guitars">
        {data.map((item) => (
          <Item key={item.name} itemObj={item} onSelect={onSelectItem} />
        ))}
      </ul>
    </main>
  );
}

function Item({ itemObj, onSelect }) {
  return (
    <li className="guitar" onClick={() => onSelect(itemObj)}>
      <img
        src={itemObj.photoName}
        alt={itemObj.name}
        style={{ cursor: "pointer" }} // Add cursor pointer
      />
      <div>
        <h3>{itemObj.name}</h3>
        <p>{itemObj.description}</p>
        <span>{itemObj.price}</span>
      </div>
    </li>
  );
}

export default ItemList;
