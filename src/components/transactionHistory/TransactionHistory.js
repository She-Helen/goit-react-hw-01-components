import React from "react";
import { TransactionHistoryRow } from "./transactionHistoryRow/TransactionHistoryRow";

export function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TransactionHistoryRow key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
}
