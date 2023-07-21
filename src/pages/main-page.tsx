import { FunctionComponent } from "react";
import { Button, Icon } from "@mui/material";
import styles from "./main-page.module.css";
const MainPage: FunctionComponent = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.frame}>
        <b className={styles.angletor}>ANGLETOR</b>
        <div className={styles.frame1}>
          <div className={styles.home}>home</div>
          <div className={styles.portfolio}>portfolio</div>
          <div className={styles.notification}>notification</div>
          <div className={styles.chat}>chat</div>
        </div>
      </div>
      <Button
        className={styles.frame2}
        sx={{ width: 548 }}
        variant="contained"
        name="holdings"
        color="primary"
        size="large"
        href="/holgings-page"
      >
        holding
      </Button>
      <div className={styles.frame3}>
        <Button
          className={styles.frame4}
          variant="contained"
          name="positions"
          color="primary"
          size="large"
          href="/positions-page"
        >
          positions
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
