import React, { FC, ReactElement } from "react";
import styles from "./PointMenu.module.scss";

type PointMenuProps = {
  questions: Array<{
    id: number;
    question: string;
    options: Array<string>;
    correct_answer: string;
    amount: number;
  }>;
  points: number;
  id: number;
};

export const PointMenu: FC<PointMenuProps> = ({
  questions,
  points,
  id,
}): ReactElement => {
  const getClassList = (item: { id: number; amount: number }) => {
    const classes = [styles.pointListItem];

    if (id === item.id) {
      classes.push(styles.active);
    }
    if (points >= item.amount) {
      classes.push(styles.earned);
    }

    return classes.join(" ");
  };

  const reversedQuestions = [...questions];

  return (
    <>
      <ul className={styles.pointList}>
        {reversedQuestions
          .sort((a, b) => b.id - a.id)
          .map((item: { id: number; amount: number }) => (
            <li key={item.id} className={getClassList(item)}>
              {Number(item.amount).toLocaleString("en", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })}
            </li>
          ))}
      </ul>
    </>
  );
};
