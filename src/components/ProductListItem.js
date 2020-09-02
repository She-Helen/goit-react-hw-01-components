import React from "react";

export function ProductListItem({ title, style }) {
  return (
    <li>
      <h2 style={{ color: "red" }}>{title}</h2>
      <p>{style}</p>
    </li>
  );
}
