import React from "react";
import Color from "./Color";

function Colors({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <Color key={index} item={item} />
      ))}
    </ul>
  );
}

export default Colors;
