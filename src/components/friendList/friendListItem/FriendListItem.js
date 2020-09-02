import React from "react";

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span
        className="status"
        style={{
          display: "block",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: isOnline ? "green" : "red",
        }}
      ></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
