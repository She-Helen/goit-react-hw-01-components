import React from "react";

export function ProfileDescription({ name, tag, location, avatar }) {
  return (
    <div className="description">
      <img src={avatar} alt="user avatar" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
}
