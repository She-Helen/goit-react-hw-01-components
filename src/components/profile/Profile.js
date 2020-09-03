import React from "react";
import PropTypes from "prop-types";
import { ProfileDescription } from "./profileDescription/ProfileDescription";
import { ProfileStats } from "./profileStats/ProfileStats";
import defaultImg from "../../assets/default.png";
import styles from "./profile.module.css";

export function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <ProfileDescription
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ul className={styles.stats}>
        <ProfileStats stats={stats} />
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
