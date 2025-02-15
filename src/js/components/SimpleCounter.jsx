import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/index.css"; 


const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 1000000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedCount = count.toString().padStart(6, "0").split("");

  return (
    <div className="container">
      <div className="counter-container d-flex p-3">
      <div>
        <i className="fa-regular fa-clock  icon-box"></i>
      </div>
      {formattedCount.map((digit, index) => (
          <div key={index} className="digit-box">{digit}</div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCounter;
