import css from "./Options.module.css";
export const Options = ({ leaveFeedback, showResetBtn, total }) => {
  return (
    <div className={css.btn}>
      <button onClick={() => leaveFeedback("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => leaveFeedback("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => leaveFeedback("bad")} className={css.button}>
        Bad
      </button>
      {total && (
        <button onClick={showResetBtn} className={css.button}>
          Reset
        </button>
      )}
    </div>
  );
};
