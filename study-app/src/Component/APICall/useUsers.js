// Approach 3: Custom hook (Recommended for reusability)

// Approach 2: IIFE (Immediately Invoked Function Expression)

import React, { useEffect, useState } from "react";
import axios from "axios";

export const useUsers = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(url);
           setData(response.data);
      } catch (err) {
        if (err.response) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { users, loading, error };
};
