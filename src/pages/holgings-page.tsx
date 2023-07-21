import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import PieChartIcon from "../components/pie-chart-icon";
import styles from "./holgings-page.module.css";
const HolgingsPage: FunctionComponent = () => {
  return (
    <div className={styles.holgingsPage}>
      <div className={styles.overview}>Overview</div>
      <PieChartIcon />
      <div className={styles.frame}>
        <b className={styles.angletor}>ANGLETOR</b>
        <div className={styles.frame1}>
          <div className={styles.home}>home</div>
          <Link className={styles.portfolio} to="/main-page">
            portfolio
          </Link>
          <div className={styles.notification}>notification</div>
          <div className={styles.chat}>chat</div>
        </div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.holdings}>holdings</div>
        <div className={styles.frame3}>
          <div className={styles.positions}>holdings</div>
        </div>
      </div>
      <div className={styles.frame4}>
        <div className={styles.current}>
          <p className={styles.p}>₹22,678.15</p>
          <p className={styles.p}>Current</p>
        </div>
        <div className={styles.investedAmount}>
          <span className={styles.investedAmountTxtContainer}>
            <p className={styles.p}>₹20,900.70</p>
            <p className={styles.p}>Invested Amount</p>
          </span>
        </div>
        <Link className={styles.frame5} to="/">
          <div className={styles.positions}>positions</div>
        </Link>
      </div>
    </div>
  );
};

export default HolgingsPage;
