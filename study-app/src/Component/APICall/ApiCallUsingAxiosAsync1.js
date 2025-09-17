import React, { useEffect, useState } from "react";
import axios from "axios";

export const ApiCallUsingAxiosAsync1 = () => {
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
          // Server responded with a status other than 2xx
          setError(`Error ${err.response.status}: ${err.response.statusText}`);
        } else if (err.request) {
          // Request was made but no response received
          setError("No response received from server.");
        } else {
          // Other errors
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
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
