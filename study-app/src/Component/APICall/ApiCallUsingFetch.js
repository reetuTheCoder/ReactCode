import React, {  useEffect, useState } from "react";

export const ApiCallUsingFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        if (!resp.ok) {
          const err = new Error("Something went wrong while fetching data.");
          err.status = resp.status;
          throw err;
        }
        return resp.json();
      })
      .then((user) => {
        console.log(user);

        setUsers(user);
        setLoading(false);
      })
      .catch((err) => {
       setError(`Error ${err.status || ""}: ${err.message}`);
        console.log(err);
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
