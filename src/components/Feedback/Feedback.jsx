import css from "./Feedback.module.css";
export const Feedback = ({ data: { good, neutral, bad } }) => {
  const totalPercent = Math.round(
    ((good + neutral) / (good + neutral + bad)) * 100
  );
  return (
    <>
      <div className={css.feedback}>
        <p className={css.feedback__text}>Good: {good}</p>
        <p className={css.feedback__text}>Neutral: {neutral}</p>
        <p className={css.feedback__text}>Bad: {bad}</p>
        <p className={css.feedback__text}>Total: {good + neutral + bad}</p>
        <p className={css.feedback__text}>Positive feedback: {totalPercent}%</p>
      </div>
    </>
  );
};
