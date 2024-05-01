import PropTypes from "prop-types";
import icons from "img/svg/icons.svg";
import styles from "./BurgerMenu.module.scss";

export const BurgerMenu = ({ isOpen, onClick }) => {
  return (
    <button
      type="button"
      className={styles.mobileMenuButton}
      aria-label="Points"
      aria-expanded="false"
      aria-controls="mobile-menu"
      data-menu-button
      onClick={() => onClick()}
    >
      <svg className={styles.icon}>
        {isOpen ? (
          <use
            className="mobile-menu-button-icon-close"
            href={`${icons}#icon-Close`}
          ></use>
        ) : (
          <use
            className="mobile-menu-button-icon-open"
            href={`${icons}#icon-Menu`}
          ></use>
        )}
      </svg>
    </button>
  );
};

BurgerMenu.defaultProps = {
  isOpen: false,
  onClick: () => {},
};

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};
