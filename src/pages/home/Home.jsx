import React from 'react'
import './styles.scss'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
export default function Home() {
  return (
    <div>
        <HeroBanner/>
        <Trending/>
        <div className='gg'>
        </div>
    </div>
  )
}
