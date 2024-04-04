import { useState } from "react";
import NepalClock from "./Components/NepalClock";
import { useEffect } from "react";

let CurreentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      // console.log("Cancelled the interval");
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <NepalClock />
      <h3 className="fw-bolder">
        <b className="lead">
          The current time of Nepal is: {time.toLocaleDateString()}{" "}
          {time.toLocaleTimeString()}
        </b>
      </h3>
    </div>
  );
};

export default CurreentTime;
