import React from "react";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = (props: any) => {
  return (
    <div
      className={`has-text-centered is-fixed-left ${styles.sidebar} `}
    >
      {props.children}
    </div>
  );
};

export default Sidebar;
