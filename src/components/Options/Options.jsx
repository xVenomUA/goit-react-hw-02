
import css from "./Options.module.css"
export const Options = () => { 
    return (
        <div className={css.btn}>
        <button className={css.button}>Good</button>
        <button className={css.button}>Neutral</button>
        <button className={css.button}>Bad</button>
        </div>
    );
}