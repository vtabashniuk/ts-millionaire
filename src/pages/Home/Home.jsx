import { ResponsiveImage } from "components/ResponsiveImage";
import { StartGameButton } from "components/StartGameButton";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ResponsiveImage />
          <h1 className={styles.title}>
            Who wants to be
            <br />a millionaire
          </h1>
          <StartGameButton title={"Start"} />
        </div>
      </div>
    </>
  );
};
