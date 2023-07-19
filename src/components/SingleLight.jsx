import { useState } from "react";
import BulbOff from "/images/light-off.svg";
import LightBlue from "/images/light-blue.svg";
export const SingleLight = () => {
  const [isOn, setOn] = useState(true);

  const imageSrc = isOn ? LightBlue : BulbOff;

  const handleToggle = () => {
    setOn(!isOn);
  };

  return <img onClick={handleToggle} src={imageSrc} alt="Single light" />;
};
