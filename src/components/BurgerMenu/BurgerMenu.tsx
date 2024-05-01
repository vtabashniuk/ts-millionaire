import React, { FC, ReactElement } from "react";
import icons from "img/svg/icons.svg";
import styles from "./BurgerMenu.module.scss";

type BurgerMenuProps = {
  isOpen?: boolean;
  onClick?: () => void;
};

export const BurgerMenu: FC<BurgerMenuProps> = ({
  isOpen = false,
  onClick = () => {},
}): ReactElement => {
  return (
    <button
      type="button"
      className={styles.mobileMenuButton}
      aria-label="Points"
      aria-expanded="false"
      aria-controls="mobile-menu"
      data-menu-button
      onClick={onClick}
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
