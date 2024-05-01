import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MobileContext } from "Context";
import data from "questions.json";
import { BurgerMenu } from "components/BurgerMenu";
import { PointMenu } from "components/PointMenu";
import styles from "./Game.module.scss";

export const Game = () => {
  const isMobile = useContext(MobileContext);
  const navigate = useNavigate();
  const [pointsMenu, setPointsMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [disabledOption, setDisabledOption] = useState(false);
  const [correctOption, setCorrectOption] = useState(null);
  const [wrongOption, setWrongOption] = useState(null);
  const [questionId, setQuestionId] = useState(0);
  const [points, setPoints] = useState(0);
  const { questions } = data;
  const { question, options, correct_answer, amount } = questions.find(
    (item) => questionId === item.id
  );

  const checkAnswer = (answer, amount) => {
    if (answer.toLowerCase() === correct_answer.toLowerCase()) {
      setCorrectOption(answer);
      setTimeout(() => {
        setPoints(amount);
        setDisabledOption(false);
        if (questionId < questions.length - 1) {
          setQuestionId((prevId) => (prevId += 1));
        } else {
          navigate("/millionaire/end", { state: { amount } });
        }
      }, 750);
    } else {
      setWrongOption(answer);
      setTimeout(() => {
        navigate("/millionaire/end", { state: { amount: points } });
      }, 750);
    }
  };

  const getClassList = (item) => {
    const classes = [styles.answerListItem];

    if (selectedOption === item) {
      classes.push(styles.selected);
    }
    if (disabledOption) {
      classes.push(styles.disabled);
    }
    if (correctOption === item) {
      classes.push(styles.correct);
    }
    if (wrongOption === item) {
      classes.push(styles.wrong);
    }
    return classes.join(" ");
  };

  const toggleMobileMenu = () => {
    setPointsMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.container}>
        {isMobile && (
          <div className={styles.burgerMenu}>
            <BurgerMenu isOpen={pointsMenu} onClick={toggleMobileMenu} />
          </div>
        )}
        <div className={styles.wrapper}>
          <p className={styles.question}>{question}</p>
          <ol className={styles.answersList}>
            {options.map((item) => (
              <li
                className={getClassList(item)}
                key={item}
                onClick={() => {
                  setSelectedOption(item);
                  setDisabledOption(true);
                  setTimeout(() => {
                    checkAnswer(item, amount);
                  }, 1000);
                }}
              >
                {item}
              </li>
            ))}
          </ol>
        </div>
        {((isMobile && pointsMenu) || !isMobile) && (
          <div className={styles.sideBar}>
            <PointMenu questions={questions} points={points} id={questionId} />
          </div>
        )}
      </div>
    </>
  );
};
