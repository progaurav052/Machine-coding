import React,{useState} from 'react'

const DarkModeToggler = () => {
  const [theme, setTheme] = useState(false)
  const changeHandler = (e) => { 
    setTheme(e.target.checked)
  }
  return (
    <div className={"border border-gray-200 w-96 h-96 m-2 p-2 " + (theme === false ? "bg-white text-black" : "bg-gray-300 text-white")}>
      <h1>Dark Mode Toggle</h1>
      <div className="">
        <label className="font-bold text-xl">
          <input type="checkbox" onChange={(e) => { changeHandler(e)}} />
        </label>
        <span className="">{theme===false?"Light Mode":"Dark Mode"}</span>
      </div>
    </div>)
}


export default DarkModeToggler;

//import React, { useEffect, useState } from 'react';


