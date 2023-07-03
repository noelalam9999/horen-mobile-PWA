import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ActionAreaCard from '@/components/Card'
import TimeBracketViewSelect from '@/components/TimeBracketViewSelect'
import TimeBracket from '@/components/TimeBracket'
import Stats from '@/components/Stats'
import BottomNavigation from '@/components/BottomNavigation'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <TimeBracketViewSelect/>
      <TimeBracket/>
      <Stats/>
      <BottomNavigation/>
    
    </>
  )
}
