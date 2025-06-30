import React from "react";
import guitarData from "../data/guitarData";
import ItemList from "../components/ItemList";

function Guitars({ onSelectItem }) {
  return (
    <ItemList data={guitarData} title="Guitars" onSelectItem={onSelectItem} />
  );
}

export default Guitars;
