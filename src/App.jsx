import { Description } from "./components/Description/Description";
import { Feedback } from "./components/Feedback/Feedback";
import css from "./App.module.css";
import { Options } from "./components/Options/Options";
import { useEffect, useState } from "react";
import { Notification } from "./components/Notification/Notification";
export const App = () => {
  let data = window.localStorage.getItem("FeedBacks");
  if (data) {
    data = JSON.parse(data);
  } else {
    window.localStorage.setItem(
      "FeedBacks",
      JSON.stringify({
        good: 0,
        neutral: 0,
        bad: 0,
      })
    );
    data = JSON.parse(window.localStorage.getItem("FeedBacks"));
  }
  const [FeedBacks, setFeedBacks] = useState({
    good: data.good,
    neutral: data.neutral,
    bad: data.bad,
  });

  const LeaveFeedBack = (e) => {
    const name = e.target.textContent.toLowerCase();
    name.toLowerCase();
    setFeedBacks({
      ...FeedBacks,
      [name]: FeedBacks[name] + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("FeedBacks", JSON.stringify(FeedBacks));
  }, [FeedBacks]);

  const Reset = () => {
    setFeedBacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  function TotalFeedback() {
    return FeedBacks.good + FeedBacks.neutral + FeedBacks.bad;
  }

  return (
    <div className={css.app}>
      <Description />
      <Options
        leaveFeedBack={LeaveFeedBack}
        Reset={Reset}
        TotalFeedback={TotalFeedback}
        data={TotalFeedback}
      />
      {TotalFeedback() > 0 ? (
        <Feedback data={FeedBacks} total={TotalFeedback()} />
      ) : (
        <Notification />
      )}
    </div>
  );
};
