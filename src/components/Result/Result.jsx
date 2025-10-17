import css from "./Result.module.css"

const Result = () => {
  return (
    <div className={css.result}>
      <h2>Your Result</h2>
      <div className={css.score}>
        <p className={css.number}>76</p>
        <p className={css.span}>of 100</p>
      </div>
      <h3>Great</h3>
      <p className={css.info}>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  )
}

export default Result
