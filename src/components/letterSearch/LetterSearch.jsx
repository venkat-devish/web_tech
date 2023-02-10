import React, { useState, useEffect } from "react";
import { userData } from "./filterData";

let crIndex;
const LetterSearch = () => {
  const [value, setValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData);

  useEffect(() => {
    if (value !== "") {
      const res = userData.filter((item, index) => {
        if (item.name.toLowerCase().startsWith(value)) {
          crIndex = value.length;
          console.log(crIndex);
          return item.name.toLowerCase().startsWith(value);
        } else {
          return item.name
            .toLowerCase()
            .startsWith(value.substring(0, crIndex));
        }
      });
      setFilteredUsers(res);
    } else {
      setFilteredUsers(userData);
    }
  }, [value]);
  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      {filteredUsers.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </div>
  );
};

export default LetterSearch;
