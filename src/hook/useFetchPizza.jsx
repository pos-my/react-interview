import { useEffect, useState } from "react";

const useFetchPizza = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!data) {
      const handleFetch = async () => {
        setLoading(true);
        try {
          const request = await fetch("/data/pizza.json");
          const response = await request.json();
          setData(response);
        } catch (error) {
          setError(error);
          setLoading(false);
        } finally {
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }
      };

      handleFetch();
    }
  }, [data]);

  return { loading, error, data };
};

export default useFetchPizza;
