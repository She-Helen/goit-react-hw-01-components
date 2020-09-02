import React from "react";

const randomColor = function () {
  return `rgb(${Math.round(Math.random() * 255)},${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)} )`;
};

export function StatisticsListItem({ label, percentage }) {
  return (
    <li>
      <span className="label" style={{ backgroundColor: randomColor() }}>
        {label}
      </span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}
