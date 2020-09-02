import React from "react";
import { StatisticsList } from "./statisticsList/StatisticsList";

export function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title.length > 0 ? <h2 className="title">{title}</h2> : null}
      <StatisticsList stats={stats} />
    </section>
  );
}
