import React from "react";
import { ProfileDescription } from "./profileDescription/ProfileDescription";
import { ProfileStats } from "./profileStats/ProfileStats";

export function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <ProfileDescription
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ul className="stats">
        <ProfileStats stats={stats} />
      </ul>
    </div>
  );
}
