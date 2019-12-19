import React, { useState } from "react";

const Test = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <div>
      <h1>Gogi</h1>
      <button
        type="button"
        onClick={() => {
          setActive(!active);
        }}
      >
        Click Gogi
      </button>
    </div>
  );
};

export default Test;
