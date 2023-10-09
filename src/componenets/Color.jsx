import React from "react";

function Color({ item }) {
  return <li key={item.id}>{item.name}</li>;
}

export default Color;
