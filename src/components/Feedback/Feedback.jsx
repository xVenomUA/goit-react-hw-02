import css from './Feedback.module.css'
export const Feedback = ({ data: { good, neutral, bad } }) => {
    return (
        <ul>
            <li>
                <p className={css.text}>Good: {good}</p>
            </li>
            <li>
                <p className={css.text}>Neutral: {neutral}</p>
            </li>
            <li>
                <p className={css.text}>Bad: {bad}</p>
            </li>
        </ul>
    );
};