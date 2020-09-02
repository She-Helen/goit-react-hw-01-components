import React from "react";
import { StatisticsListItem } from "../statisticsListItem/StatisticListItem";

export function StatisticsList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map((obj) => (
        <StatisticsListItem key={obj.id} {...obj} />
      ))}
    </ul>
  );
}
