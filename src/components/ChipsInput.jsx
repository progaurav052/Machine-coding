import React, { useState } from "react";

const ChipsInput = () => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  const enterHandler = (e) => {
    if (e.key === "Enter" && inputText.trim!=="") {
      setItems(currentItems => [...currentItems, inputText]);
      setInputText("");
    }
  };
  const deleteHandler = (index) => {
    const newItems = [...items];
    newItems.splice(index,1);
    setItems(newItems);
  };
  return (
    <div className="m-2 p-4 w-1/2 mx-auto">
      <h1 className="font-bold text-2xl mx-auto">Chips Input:</h1>
      <input
        type="text"
        placeholder="Enter you input"
        className="p-2 border border-blue-200 w-80 rounded-lg"
        value={inputText}
        onChange={(e) => onChangeHandler(e)}
        onKeyDown={(e) => enterHandler(e)}
      />
      {items.map((item, index) => {
        return (
          
          <div
            key={index}
            className="bg-gray-200 m-4 p-4 rounded-lg w-1/2 justify-between flex"
          >
            <h1>{item}</h1>
            <label onClick={() => deleteHandler(index)}>{"❌"}</label>
          </div>
        );
      })}
    </div>
  );
};

export default ChipsInput;
