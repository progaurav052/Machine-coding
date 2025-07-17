import React, { useState } from "react";

function Accordion(props) {
  const [showing, setShowing] = useState(false);
  const { index, setShowIndex, item, showAccord } = props;
  return (
    <div
      className="border border-gray-300 rounded-lg m-4 p-2 bg-gray-200"
      onClick={() => {
        if (showing === false) {
          setShowing(!showing);
          setShowIndex(index);
        } else {
          setShowing(!showing);
          setShowIndex(null);
        }
      }}>
    
      <div className="font-bold rounded-lg  p-4 flex justify-between">
        <h3 class="item-title">{item.title}</h3>
        <h4>{"⌄"}</h4>
      </div>
      {showAccord && <div class="item-content">{item.content}</div>}
    </div>
  );
}

export default Accordion;
