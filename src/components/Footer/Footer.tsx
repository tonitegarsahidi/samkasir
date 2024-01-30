import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = (props: any) => {
  return (
    <div
      className={`has-background-primary has-text-white has-text-centered is-fixed-top ${styles.footer} `}
    >
      <h1>footer</h1>
      {props.children}
    </div>
  );
};

export default Footer;
