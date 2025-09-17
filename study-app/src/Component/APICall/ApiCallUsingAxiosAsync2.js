// Approach 2: IIFE (Immediately Invoked Function Expression)


import React, { useEffect, useState } from "react";
import axios from "axios";

export const ApiCallUsingAxiosAsync2 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
    (async () => {
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
    })();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
