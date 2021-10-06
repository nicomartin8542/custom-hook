import React, { memo } from "react";

export const ShowCounter = memo(({ increment }) => {
  console.log("Me vuelvo a cargar");
  return (
    <button className="btn btn-primary mt-5" onClick={() => increment(1)}>
      +1
    </button>
  );
});
