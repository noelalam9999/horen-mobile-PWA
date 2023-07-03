import React, { useState, useEffect } from 'react'
import TimeBracketButton from './TimeBracketButton';

function TimeBracketViewSelect() {

  const [options, setOptions] = useState<string[]>([""]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    setOptions([
      "year",
      "month",
      "week",
      "day"
    ])
    return () => {
      
    }
  }, [])
  
  return (
    <div className='flex overflow-x-scroll'>
      {options.map((option:String, key)=>{
        return <TimeBracketButton key={key} option={option} setSelected={setSelected}/>
      })}
    </div>
    
  )
}

export default TimeBracketViewSelect