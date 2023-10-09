import React from "react";
import Color from "./Color";

function Colors({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Color item={item} />
      ))}
    </ul>
  );
}

export default Colors;
