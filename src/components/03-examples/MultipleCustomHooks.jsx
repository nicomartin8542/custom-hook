import React from "react";
import useFetch from "../../hooks/useFetch";
import "../02-ouseEfect/simpleForm.css";

export const MultipleCustomHooks = () => {
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  console.log(state);

  return (
    <div>
      <h1>BreakingBad Qoutes</h1>
      <hr />

      <div className="alert alert-info text-center">loading....</div>

      <blockquote className="pull-right">
        <p className="mb-0">Hola Mundo</p>
        <br />
        <footer className="blockquote-footer">Nicolas Martin</footer>
      </blockquote>
    </div>
  );
};
