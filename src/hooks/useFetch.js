import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          error: null,
          loading: false,
          data,
        });
      })
      .catch((err) => {
        setState({
          error: err,
          loading: false,
          data: null,
        });
      });
  }, [url]);

  return state;
};

export default useFetch;
