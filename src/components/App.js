import React, { Fragment } from "react";
import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friendList/FriendList";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";
import user from "../assets/user.json";
import statisticalData from "../assets/statistical-data.json";
import friends from "../assets/friends.json";
import transactions from "../assets/transactions.json";

export function App() {
  return (
    <Fragment>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Fragment>
  );
}
