import React from "react";

const UserCard = ({ data }) => {
  console.log(data);

  const { name, age, skills } = data;

  console.log(skills);

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <span>{age}</span>
      </div>

      <div>
        <ul>
          {skills.map((skill, id) => (
            <li key={id}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
