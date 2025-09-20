import React, { use, useState } from "react";

const usersData = [
  { id: 1, name: "Alice", upVotes: 0, downVotes: 0 },
  { id: 2, name: "Bob", upVotes: 0, downVotes: 0 },
  { id: 3, name: "Charlie", upVotes: 0, downVotes: 0 },
  { id: 4, name: "David", upVotes: 0, downVotes: 0 },
  { id: 5, name: "Emma", upVotes: 0, downVotes: 0 },
];

const VoteComponent = () => {
  const [users, setUsers] = useState(usersData);

  const handleVote = (id, voteType) => {
    setUsers((prev) =>      
      prev.map((user) => {
        if (user.id === id) {
          if (voteType === "up") {
            return {
              ...user,
              upVotes: user.upVotes === 1 ? 0 : 1,
              // downVotes: 0
            };
          } else if (voteType === "down") {
            return {
              ...user,
              downVotes: user.downVotes === 1 ? 0 : 1,
            //   upVotes: 0,
            };
          }
        }
        return user;
      })
    );
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <div>
            <div>
              <strong>👍</strong> {user.upVotes}
              <strong>👎</strong> {user.downVotes}
            </div>
            <button onClick={() => handleVote(user.id, "up")}>Dislike</button>
            <button onClick={() => handleVote(user.id, "down")}>Like</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VoteComponent;
