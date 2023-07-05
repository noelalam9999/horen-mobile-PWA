import React, { useState, useEffect } from 'react'
import { Dispatch,SetStateAction } from 'react'
import TimeBracketViewSelectButton from './TimeBracketViewSelectButton';

function TimeBracketViewSelect({setSelected, selected}:{setSelected : Dispatch<SetStateAction<string>>, selected: string}) {

  const [options, setOptions] = useState<string[]>([""]);


  useEffect(() => {
    setOptions([
      "day",
      "week",
      "month",
      "year",   
    ])
    setSelected("week")
    return () => {
      
    }
  }, []);
  
  return (
    <div className='flex overflow-x-scroll'>
      {
          options.map((option:string, key)=>{
            return (
              <TimeBracketViewSelectButton 
              key={key} 
              option={option} 
              setSelected={setSelected} 
              selected={selected}/>
              )
            }
          )
        }
    </div>
    
  )
}

export default TimeBracketViewSelect