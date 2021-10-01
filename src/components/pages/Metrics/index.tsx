import style from "./style.module.less";

const MetricsPage = () => (
  <form action="/metrics" method="POST">
    <h3>Please input formular amount: </h3>
    <div>
      <button className={style.btn} data-amt="-10">
        -10
      </button>
      <button className={style.btn} data-amt="-30">
        -30
      </button>
      <button className={style.btn} data-amt="30">
        +30
      </button>
      <button className={style.btn} data-amt="60">
        +60
      </button>
    </div>
    <input className={style.input} type="number" name="amt" />
    &nbsp; ml
    <br />
    <button id="submit" type="submit" className={style.input}>
      Submit
    </button>
  </form>
);

export default MetricsPage;
