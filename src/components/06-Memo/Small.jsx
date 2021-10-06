import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Me vuelvo a recargar");

  return <small>{value}</small>;
});
