import React, { useEffect, useState } from "react";

const Timer = ({ duration }) => {
  const [timer, setTimer] = useState(duration);

  const getFormattedData = (milliseconds) => {
    let seconds = +Math.floor(milliseconds / 1000);
    let minutes = +Math.floor(seconds / 60);
    let hours = +Math.floor(minutes / 60);
    let days = +Math.floor(hours / 24);

    let Op_seconds = seconds % 1000;
    let Op_minutes = seconds % 60;
    let Op_hours = minutes % 60;
    console.log(Op_hours, Op_minutes, Op_seconds);
    return `${days} ${Op_hours}: ${Op_minutes}: ${Op_seconds}`;
  };
  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1000);
    }, 1000);
  }, [timer]);
  //   getFormattedData(timer);
  return <div>{getFormattedData(timer)}</div>;
};

export default Timer;
