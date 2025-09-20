import React, { useState } from "react";

let lists = ["React", "Vue", "Angular"];

const Dyn_List_Removal = () => {
  const [listItem, setListItem] = useState(lists);

  const handleDel = (id) => {
    console.log("render gfhfj");
    
    setListItem(listItem.filter((item) => item !== id));
  };
  return (
    <div>
      <ul>
        {listItem.map((list, index) => (
          <li key={index}>
            <span>{list}</span>
            <button onClick={() => handleDel(list)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dyn_List_Removal;
