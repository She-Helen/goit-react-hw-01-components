import React from "react";
import { FriendListItem } from "./friendListItem/FriendListItem";

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}
