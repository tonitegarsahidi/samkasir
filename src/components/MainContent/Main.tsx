import React from "react";
import styles from "./Main.module.scss";

const Main: React.FC = (props: any) => {
  return (
    <div
      className={`has-text-centered ${styles.main} `}
    >
      {props.children}
    </div>
  );
};

export default Main;
