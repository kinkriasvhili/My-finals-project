// hooks/useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

const useDataLoader = (endpoint) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchResource = async () => {
      try {
        const response = await axios.get(endpoint, {
          signal: abortController.signal,
        });
        setFetchedData(response.data);
        setFetchError(null);
      } catch (err) {
        if (!abortController.signal.aborted) {
          setFetchError(
            err.message.includes("404") ? "Resource not found" : err.message
          );
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoadingStatus(false);
        }
      }
    };

    fetchResource();

    return () => abortController.abort();
  }, [endpoint]);

  return { fetchedData, isLoading, fetchError };
};

export default useDataLoader;
