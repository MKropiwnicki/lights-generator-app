import { Text } from "./Text";
import { IconIncrement } from "./icons/IconIncrement.jsx";
import { IconDecrement } from "./icons/IconDecrement.jsx";
import styles from "./icons/Counter.module.css";
import { useState } from "react";

export const Counter = (props) => {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    if (value <= 0) {
      return;
    }
    setValue(value - 1); //zapis value-- lub value++ nie działa, wywala błędy
  };
  return (
    <div className={styles.wrapper}>
      <p>
        {value} {props.text}
      </p>
      <nav>
        <IconDecrement onClick={handleDecrement} />
        <IconIncrement onClick={handleIncrement} />
      </nav>
    </div>
  );
};
