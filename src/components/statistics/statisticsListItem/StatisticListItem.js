import React from "react";
import PropTypes from "prop-types";
import { randomColor } from "../../../helpers/helpers";
import styles from "./statisticsListItem.module.css";

export function StatisticsListItem({ label, percentage }) {
  return (
    <li className={styles.item} style={{ backgroundColor: randomColor() }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
