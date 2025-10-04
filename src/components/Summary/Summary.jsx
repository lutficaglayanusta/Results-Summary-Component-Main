import css from "./Summary.module.css"

const Summary = ({data}) => {
  return (
    <div className={css.summary}>
      <h2>Summary</h2>
      <ul>
        <li className={css.red}>
          <img src={data[0].icon} alt="" />
          <p className={css.redInfo}>{data[0].category}</p>
          <p>{data[0].score}/100</p>
        </li>
        <li className={css.yellow}>
          <img src={data[1].icon} alt="" />
          <p className={css.yellowInfo}>{data[1].category}</p>
          <p>{data[1].score}/100</p>
        </li>
        <li className={css.green}>
          <img src={data[2].icon} alt="" />
          <p className={css.greenInfo}>{data[2].category}</p>
          <p>{data[2].score}/100</p>
        </li>
        <li className={css.blue}>
          <img src={data[3].icon} alt="" />
          <p className={css.blueInfo}>{data[3].category}</p>
          <p>{data[3].score}/100</p>
        </li>
      </ul>
      <button>Continue</button>
    </div>
  )
}

export default Summary
