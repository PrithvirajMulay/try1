import { FunctionComponent } from "react";
import styles from "./frame1.module.css";
const Frame1: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.positionsPl}>
        <p className={styles.p}>₹1777.45</p>
        <p className={styles.p}>{`Positions P&L`}</p>
      </div>
      <div className={styles.pastPl}>
        <span className={styles.pastPlTxtContainer}>
          <p className={styles.p}>₹0</p>
          <p className={styles.p}>{`Past P&L`}</p>
        </span>
      </div>
      <div className={styles.investedAmount}>
        <span className={styles.pastPlTxtContainer}>
          <p className={styles.p}>₹20,900.70</p>
          <p className={styles.p}>Invested Amount</p>
        </span>
      </div>
      <div className={styles.frame1}>
        <div className={styles.positions}>positions</div>
      </div>
    </div>
  );
};

export default Frame1;
