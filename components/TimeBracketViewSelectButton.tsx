import React from 'react'
import { Dispatch,SetStateAction } from 'react'

function TimeBracketButton(
    {
      option,
      setSelected,
      selected
    } : 
    { 
      option:string,
      setSelected:Dispatch<SetStateAction<string>>,
      selected:String
      }) {
  return (
    <div className={`time-bracket-button ${option===selected ? "-dark" : "-alge"} center`} onClick={()=>{setSelected(option)}}>
      {option}
    </div>
  )
}

export default TimeBracketButton