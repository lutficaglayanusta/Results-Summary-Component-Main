import css from "./Result.module.css"

const Result = () => {
  return (
    <div className={css.result}>
      <h2>Your Result</h2>
      <p>76 of 100</p>
      <h3>Great</h3>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  )
}

export default Result
