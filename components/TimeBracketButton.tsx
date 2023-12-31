import React from 'react'
import { Dispatch,SetStateAction } from 'react'

function TimeBracketButton(
    {
      option,
      setSelected,
      selectedBracket

    } : 
    { 
      option:string,
      setSelected:Dispatch<SetStateAction<string>>,
      selectedBracket:String
      }) {
  return (
    <div className={`time-bracket-button details ${option===selectedBracket ? "-dark" : "-alge"} center`} onClick={()=>{setSelected(option)}}>
      {option}
    </div>
  )
}

export default TimeBracketButton