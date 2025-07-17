import React from "react";

function Accordion(props) {
  const { index, setShowIndex, item, showAccord } = props;
  const clickHandler = () => {
    console.log(props);
    if (showAccord === true) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };
  return (
    <div
      className="border border-gray-300 rounded-lg m-4 bg-gray-200 w-96"
      onClick={clickHandler}
    >
      <div className="font-bold rounded-lg  p-4 flex justify-between">
        <h3>{item.title}</h3>
        <h4>{"⌄"}</h4>
      </div>
      {showAccord && <p className="p-2 bg-white m-2 border border-gray-200 rounded-lg">{item.content}</p>}
    </div>
  );
}

export default Accordion;
