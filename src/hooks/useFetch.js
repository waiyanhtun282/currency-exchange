import { useEffect, useState } from "react";
const URL = "http://apilayer.net/api";

const useFetch = (endpoints) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  

  useEffect(() => {
    const controller = new AbortController();

    const fetchApi = async (controller) => {
        setLoading(true);
        setData(null);
        try {
          await fetch(
            `${URL}/${endpoints}?access_key=${import.meta.env.VITE_API_ACCESS_KEY} `,{controller}
          )
            .then((res) => res.json())
            .then((currency) => {
              setData(currency);
              setLoading(false);
            });
        } catch (error) {
          console.log(controller.signal.aborted);
          setLoading(false);
        }
      };

      fetchApi(controller.signal);

      return () => controller.abort();
  }, [endpoints]);
  
  return {loading,data};
};

export default useFetch;
