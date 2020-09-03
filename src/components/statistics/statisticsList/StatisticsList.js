import React from "react";
import PropTypes from "prop-types";
import { StatisticsListItem } from "../statisticsListItem/StatisticListItem";
import styles from "./statisticsList.module.css";

export function StatisticsList({ stats }) {
  return (
    <ul className={styles.statList}>
      {stats.map((obj) => (
        <StatisticsListItem key={obj.id} {...obj} />
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
