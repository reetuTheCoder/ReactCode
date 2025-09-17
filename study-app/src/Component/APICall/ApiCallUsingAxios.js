import React, { useEffect, useState } from "react";
import axios from "axios";

export const ApiCallUsingAxios = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        setUsers(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.resp) {
          // Server responded with a status other than 2xx
          setError(`Error ${err.resp.status}: ${err.resp.statusText}`);
        } else if (err.resp) {
          // Request was made but no response received
          setError("No response received from server.");
        } else {
          // Other errors
          setError(err.message);
        }
        setLoading(false);
      });
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
