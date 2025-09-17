import React, { useState } from "react";
import ResButton, { Greeting } from "./ResButton";

const Main = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <h2>{count}</h2>
        <ResButton
          label="Increment"
          onClick={handleClick}
          disabled={count >= 5}
          className="primary-btn"
        />
      </div>

      <br/>
      <br/>
      <br/>

      <div>
        <Greeting name="reetu" age={25} />
        <Greeting name="Seema"/>

      </div>
    </div>
  );
};

export default Main;
