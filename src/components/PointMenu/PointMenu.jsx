import PropTypes from "prop-types";
import styles from "./PointMenu.module.scss";

export const PointMenu = ({ questions, points, id }) => {
  const getClassList = (item) => {
    const classes = [styles.pointListItem];

    if (id === item.id) {
      classes.push(styles.active);
    }
    if (points >= item.amount) {
      classes.push(styles.earned);
    }

    return classes.join(" ");
  };

  return (
    <>
      <ul className={styles.pointList}>
        {questions.toReversed().map((item) => (
          <li key={item.amount} className={getClassList(item)}>
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

PointMenu.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  points: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
