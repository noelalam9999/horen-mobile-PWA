import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ActionAreaCard from '@/components/Card'
import TimeBracketViewSelect from '@/components/TimeBracketViewSelect'
import TimeBracket from '@/components/TimeBracket'
import Stats from '@/components/Stats/index'
import BottomNavigation from '@/components/BottomNavigation'
import {useState} from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selected, setSelected] = useState<string>("week");
  const [selectedBracket, setSelectedBracket] = useState<string>("sun");
  return (
    <>
      <TimeBracketViewSelect setSelected = {setSelected} selected={selected}/>
      <TimeBracket setSelectedBracket={setSelectedBracket} selected={selected} selectedBracket={selectedBracket}/>
      <Stats/>
      <BottomNavigation/>
    
    </>
  )
}
