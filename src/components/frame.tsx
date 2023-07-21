import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./frame.module.css";
const Frame: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.positions}>positions</div>
      <Link className={styles.frame1} to="/holgings-page">
        <div className={styles.holdings}>holdings</div>
      </Link>
      <Button
        className={styles.frame2}
        sx={{ width: 150.00048828125 }}
        variant="contained"
        color="primary"
      >
        + NEW TRADE
      </Button>
    </div>
  );
};

export default Frame;
