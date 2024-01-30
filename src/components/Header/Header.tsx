import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = (props: any) => {
  return (
    <div
      className={`has-background-primary has-text-white has-text-centered is-fixed-top ${styles.header} `}
    >
      <h1>Header</h1>
      {props.children}
    </div>
  );
};

export default Header;
