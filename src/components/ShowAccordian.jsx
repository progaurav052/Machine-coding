import Accordion from "./Acorrdian";
import React, {useState } from 'react'
import accordianItems from "../utils/items";
const ShowAccordian = () => {
 
  const [showIndex,setShowIndex]=useState(null) 
  return (
      accordianItems.map((item,index)=>{
         return (<Accordion item={item} key={index} setShowIndex={setShowIndex} showAccord={index===showIndex?true:false}/>);
      })
  )
}

export default ShowAccordian