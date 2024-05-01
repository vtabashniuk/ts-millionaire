import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./StartGameButton.module.scss";

export const StartGameButton = ({ title }) => {
  return (
    <NavLink to={"/millionaire/game"} className={styles.button}>
      {title}
    </NavLink>
  );
};

StartGameButton.propTypes = {
  title: PropTypes.string.isRequired,
};
