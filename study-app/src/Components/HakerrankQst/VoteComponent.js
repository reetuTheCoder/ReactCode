import React, { useState } from "react";

const usersNames = ["Alice", "Bob", "Charlie"];
// task - i can vote all users like dislike as per click btn vote will increase

// need - 1. should be id in the each user

let initial = usersNames.map((name, index) => ({
  id: index,
  name,
  likes: 0,
  dislikes: 0,
}));

const VoteComponent = () => {
  const [votes, setVotes] = useState(initial);

  const handleVote = (id, voteType) => {
    //  console.log("hello");

    setVotes((prev) => {
      console.log(prev);
      return prev.map((item) => {
        // console.log(item);

        if (item.id === id) {
          if (voteType === "like") {
            return {
              ...item,
              likes: item.likes + 1,
            };
          } else {
            return {
              ...item,
              dislikes: item.dislikes + 1,
            };
          }
        }
        return item;
      });
    });
  };
  return (
    <div>
      <div>
        {votes.map((item) => (
          <div
            style={{ border: "2px solid red", marginBottom: "30px" }}
            key={item.id}
          >
            <div>{item.name}</div>
            <div>
              <button onClick={() => handleVote(item.id, "like")}>Like</button>
              <button onClick={() => handleVote(item.id, "dislike")}>
                Dislike
              </button>
            </div>

            <p>Likes: {item.likes}</p>
            <p>Dislike:{item.dislikes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoteComponent;
