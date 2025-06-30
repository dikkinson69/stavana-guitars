import React from "react";
import lampData from "../data/lampData";
import ItemList from "../components/ItemList";

function Lamps({ onSelectItem }) {
  return <ItemList data={lampData} title="Lamps" onSelectItem={onSelectItem} />;
}

export default Lamps;
