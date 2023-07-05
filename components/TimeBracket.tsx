import React, { Dispatch, SetStateAction } from 'react'
import {useState, useEffect} from 'react'
import TimeBracketButton from './TimeBracketButton';
import {timeBrackets} from '../data/timeBrackets'

function TimeBracket(
  {
    setSelectedBracket,
    selected,
    selectedBracket
  }:
  {
    setSelectedBracket : Dispatch<SetStateAction<string>>,
    selected:string,
    selectedBracket : string
  }
  ) {

  const [options, setOptions] = useState<string[]>([""]);
  

  useEffect(() => {
    setOptions(timeBrackets[selected]);
    setSelectedBracket("1");
    return () => {
      
    }
  }, []);
  useEffect(() => {
    setOptions(timeBrackets[selected]);
    
    return () => {
      
    }
  }, [selected]);

  return (
    <div className='flex overflow-x-scroll'>
    {
        options.map((option:string, key)=>{
          return (
            <TimeBracketButton 
            key={key} 
            option={option} 
            setSelected={setSelectedBracket} 
            selectedBracket={selectedBracket}/>
            )
          }
        )
      }
  </div>
  )
}

export default TimeBracket