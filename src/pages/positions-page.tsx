import { FunctionComponent } from "react";
import { Button, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import Frame from "../components/frame";
import Frame1 from "../components/frame1";
import styles from "./positions-page.module.css";
const PositionsPage: FunctionComponent = () => {
  return (
    <div className={styles.positionsPage}>
      <img className={styles.pieChartIcon} alt="" src="/pie-chart.svg" />
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
        <div className={styles.frameChild} />
        <div className={styles.frame3}>
          <div className={styles.frame4}>
            <Button
              className={styles.buy}
              sx={{ width: 150 }}
              variant="contained"
              name="buy"
              color="primary"
              size="large"
            >
              BUY
            </Button>
          </div>
          <Button
            className={styles.angletor}
            variant="contained"
            name="sell"
            color="primary"
            size="large"
          >
            SELL
          </Button>
        </div>
      </div>
      <Frame />
      <Frame1 />
    </div>
  );
};

export default PositionsPage;
