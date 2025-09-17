// Approach 3: Custom hook (Recommended for reusability)



// Approach 2: IIFE (Immediately Invoked Function Expression)


import React, { useEffect, useState } from "react";
import axios from "axios";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (err) {
        if (err.response) {
          setError(`Error ${err.response.status}: ${err.response.statusText}`);
        } else if (err.request) {
          setError("No response received from server.");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
