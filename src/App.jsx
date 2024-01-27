import { Description } from "./components/Description/Description";
import { Feedback } from "./components/Feedback/Feedback";
import css from "./App.module.css"
import { Options } from "./components/Options/Options";
console.log(css);
export const App = () => {
  const dataInformation = {
	good: 0,
	neutral: 0,
	bad: 0
  }

  return (
    <div className={css.app}>
      <Description />
      <Options />
      <Feedback data={dataInformation}/>
    </div>
  );
}
