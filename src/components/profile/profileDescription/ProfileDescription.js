import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../../assets/default.png";
import styles from "./profileDescription.module.css";

export function ProfileDescription({ name, tag, location, avatar }) {
  return (
    <div className={styles.description}>
      <img
        src={avatar}
        alt="user avatar"
        className={styles.avatar}
        width="100px"
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
}
ProfileDescription.defaultProps = {
  avatar: defaultImg,
};

ProfileDescription.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
