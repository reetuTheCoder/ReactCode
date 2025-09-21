import React, { useState } from "react";

const aspects = [
  "Readability",
  "Performance",
  "Security",
  "Documentation",
  "Testing",
];

const initialval = aspects.map((name, index) => ({
  id: index,
  name,
  upVotes: 0,
  downVotes: 0,
  upAnimating: false,
  downAnimating: false,
}));

const FeedbackSystem = () => {
  const [votes, setVotes] = useState(initialval);

  const handleVotes = (id, voteType) => {
    setVotes((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (voteType === "up") {
            return {
              ...item,
              upVotes: item.upVotes + 1,
              upAnimating: true,
            };
          } else {
            return {
              ...item,
              downVotes: item.downVotes + 1,
              downAnimating: true,
            };
          }
        }
        return item;
      })
    );

    setTimeout(() => {
      setVotes((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              upAnimating: false,
              downAnimating: false,
            };
          }
          return item;
        })
      );
    }, 500);
  };

  const animatedStyle = {
    transition: "transform 0.3s ease, color 0.3s ease",
    transform: "scale(1.3)",
    color: "#0070f3",
  };

  const normalStyle = {
    transition: "transform 0.3s ease, color 0.3s ease",
    transform: "scale(1)",
    color: "inherit",
  };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {votes.map((aspect) => (
          <div className="pa-10 w-300 card" key={aspect.id}>
            <h2>{aspect.name}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid={`upvote-btn-${aspect.id}`}
                onClick={() => handleVotes(aspect.id, "up")}
              >
                👍 Upvote
              </button>
              <button
                className="py-10 px-15 danger"
                data-testid={`downvote-btn-${aspect.id}`}
                onClick={() => handleVotes(aspect.id, "down")}
              >
                👎 Downvote
              </button>
            </div>
            <p
              style={aspect.upAnimating ? animatedStyle : normalStyle}
              data-testid={`upvote-count-${aspect.id}`}
            >
              Upvotes: <strong>{aspect.upVotes}</strong>
            </p>
            <p
              style={aspect.downAnimating ? animatedStyle : normalStyle}
              data-testid={`downvote-count-${aspect.id}`}
            >
              Downvotes: <strong>{aspect.downVotes}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
