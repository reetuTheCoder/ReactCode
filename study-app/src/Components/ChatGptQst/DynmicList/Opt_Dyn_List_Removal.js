import React, { memo, useCallback, useState } from "react";

const initialLists = [
  { id: 1, name: "React" },
  { id: 2, name: "Vue" },
  { id: 3, name: "Angular" },
];

const DisplayList = memo(({ item, onDelete }) => {
  console.log("Rendering:", item.name);
  return (
    <li>
      <span>{item.name}</span>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
});
const Opt_Dyn_List_Removal = () => {
  const [listItem, setListItem] = useState(initialLists);

  const handleDel = useCallback((id) => {
    console.log("render gfhfj");
    setListItem((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <div>
      <ul>
        {listItem.map((item) => (
          <DisplayList key={item.id} item={item} onDelete={handleDel} />
        ))}
      </ul>
    </div>
  );
};

export default Opt_Dyn_List_Removal;
