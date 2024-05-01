import { useLocation } from "react-router-dom";
import { ResponsiveImage } from "components/ResponsiveImage";
import { StartGameButton } from "components/StartGameButton";
import styles from "./End.module.scss";

export const End = () => {
  const location = useLocation();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ResponsiveImage />
          <div className={styles.textContainer}>
            <p className={styles.title}>Total score</p>
            <p>
              {Number(location.state.amount).toLocaleString("en", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })}{" "}
              earned
            </p>
          </div>
          <StartGameButton title={"Try again"} />
        </div>
      </div>
    </>
  );
};
