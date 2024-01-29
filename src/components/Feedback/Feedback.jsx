import css from "./Feedback.module.css";
export const Feedback = ({ data: { good, neutral, bad }, total }) => {
  const totalPercent = Math.round(
    ((good + neutral) / (total)) * 100
  );
  return (
    <>
      <div className={css.feedback}>
        <p className={css.feedback__text}>Good: {good}</p>
        <p className={css.feedback__text}>Neutral: {neutral}</p>
        <p className={css.feedback__text}>Bad: {bad}</p>
        <p className={css.feedback__text}>Total: {total}</p>
        <p className={css.feedback__text}>Positive feedback: {totalPercent}%</p>
      </div>
    </>
  );
};
