import React from "react";
import otherData from "../data/otherData";
import ItemList from "../components/ItemList";

function Other({ onSelectItem }) {
  return (
    <ItemList
      data={otherData}
      title="Other Items"
      onSelectItem={onSelectItem}
    />
  );
}

export default Other;
