import css from "./Options.module.css";
export const Options = ({ leaveFeedBack, Reset, data }) => {
  return (
    <div className={css.btn}>
      <button onClick={leaveFeedBack} className={css.button}>
        Good
      </button>
      <button onClick={leaveFeedBack} className={css.button}>
        Neutral
      </button>
      <button onClick={leaveFeedBack} className={css.button}>
        Bad
      </button>
      {data() !== 0 && <button onClick={Reset} className={css.button}>Reset</button>}
    </div>
  );
};
