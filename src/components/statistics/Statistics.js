import React from "react";
import PropTypes from "prop-types";
import { StatisticsList } from "./statisticsList/StatisticsList";
import styles from "./statistics.module.css";

export function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      <StatisticsList stats={stats} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
