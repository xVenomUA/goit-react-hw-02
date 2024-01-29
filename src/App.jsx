import { Description } from "./components/Description/Description";
import { Feedback } from "./components/Feedback/Feedback";
import css from "./App.module.css";
import { Options } from "./components/Options/Options";
import { useEffect, useState } from "react";
import { Notification } from "./components/Notification/Notification";
export const App = () => {
  const getDataFromLocalstorage = () => {
    return (
      JSON.parse(window.localStorage.getItem("FeedBacks")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  };
  const [feedbacks, setFeedBacks] = useState(getDataFromLocalstorage);

  const leaveFeedback = (name) => {
    setFeedBacks({
      ...feedbacks,
      [name]: feedbacks[name] + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("FeedBacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const resetFeedback = () => {
    setFeedBacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  function totalFeedback() {
    if (feedbacks.good + feedbacks.neutral + feedbacks.bad === 0) {
      return false;
    } else {
      return true;
    }
  }
  const totalResult = totalFeedback();

  return (
    <div className={css.app}>
      <Description />
      <Options
        leaveFeedback={leaveFeedback}
        showResetBtn={resetFeedback}
        total={totalResult}
      />
      {totalResult ? (
        <Feedback data={feedbacks} />
      ) : (
        <Notification />
      )}
    </div>
  );
};
