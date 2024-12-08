import { useState, useEffect } from "react";
import axios from "axios";

import { options } from "../data/data";

const useFetchAxios = (url, method = "GET", option = options.details) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios({ url, method, ...option })
        .then((res) => {
          setData(res.data);
          setError(null);
          setLoading(false);
        })
        .catch((err) => setError(err));
    };

    fetchData();
  }, [url, method, option]);

  return { data, loading, error };
};

export default useFetchAxios;
