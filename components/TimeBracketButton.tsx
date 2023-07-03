import React from 'react'
import { Dispatch,SetStateAction } from 'react'

function TimeBracketButton(
    {
      option,
      setSelected
    } : 
    { 
      option:String,
      setSelected:Dispatch<SetStateAction<string>>
      }) {
  return (
    <div className='time-bracket-button -dark center'>
      {option}
    </div>
  )
}

export default TimeBracketButton