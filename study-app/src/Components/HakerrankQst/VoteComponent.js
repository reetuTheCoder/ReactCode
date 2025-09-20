import React, { useState } from "react";

const usersNames = ["Alice", "Bob", "Charlie"];


// we use create initialUsers for  the id
const initialUsers = usersNames.map((name, index) => ({
  id: index + 1,
  name,
  upVotes: 0,
  downVotes: 0,
}));

console.log("now it will be in the obj form with id",initialUsers);


const VoteComponent = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleVote = (id, type) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              upVotes:
                type === "up" ? (user.upVotes === 1 ? 0 : 1) : user.upVotes,
              downVotes:
                type === "down"
                  ? user.downVotes === 1
                    ? 0
                    : 1
                  : user.downVotes,
            }
          : user
      )
    );
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: "1rem" }}>
          <h3>{user.name}</h3>
          <div>
            <span>👍 {user.upVotes}</span> <span>👎 {user.downVotes}</span>
          </div>
          <button onClick={() => handleVote(user.id, "up")}>Like</button>
          <button onClick={() => handleVote(user.id, "down")}>Dislike</button>
        </div>
      ))}
    </div>
  );
};

export default VoteComponent;
