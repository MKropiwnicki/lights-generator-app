import { Text } from "./Text";
import { IconIncrement } from "./icons/IconIncrement.jsx";
import { IconDecrement } from "./icons/IconDecrement.jsx";
import styles from "./icons/Counter.module.css";
import { useState } from "react";

export const Counter = (props) => {
  return (
    <div className={styles.wrapper}>
      <p>
        {props.count} {props.text}
      </p>
      <nav>
        <IconDecrement onClick={props.onDecrement} />
        <IconIncrement onClick={props.onIncrement} />
      </nav>
    </div>
  );
};
