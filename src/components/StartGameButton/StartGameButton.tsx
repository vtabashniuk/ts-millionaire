import React, { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import styles from "./StartGameButton.module.scss";

type StartGameButtonProps = {
  title?: string;
};

export const StartGameButton: FC<StartGameButtonProps> = ({
  title = "Start button",
}): ReactElement => {
  return (
    <NavLink to={"/ts-millionaire/game"} className={styles.button}>
      {title}
    </NavLink>
  );
};
