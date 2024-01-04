import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImg/Img';
import "./styles.scss"
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
const HeroBanner = () => {
    const navigate=useNavigate();
    const [background,setBackground]=useState("")
    const [query,setQuery]=useState("")
    const {url} =useSelector((state)=>state.home )
    const {data,loading}=useFetch('/movie/upcoming')
    const searchQueryHandler=(event)=>{
        if(event.key==='Enter' && query.length>0){
            navigate(`/search/${query }`)
        }
    }
    useEffect(()=>{
        console.log(url)
        const bg=url.backdrop+data?.results?.[Math.floor( Math.random()*20)]?.backdrop_path
        console.log(bg)
        setBackground(bg)
        console.log(background)
    },[data])
  return (
    <div className='heroBanner'>
        {!loading &&
        <div className='backdrop-img'>
            <Img src={background}/>
        </div>
        }
        <div className='opacity-layer'>
        </div>
        <ContentWrapper>
           
                <div className='heroBannerContent'>
                    <span className='title'>Welcome</span>
                    <span className='subtitle'>Millions of Movies,TV shows and people to discover.Explore now.</span>
                    <div className='searchInput'>
                        <input onChange={(e)=>setQuery(e.target.value)} onKeyUp={searchQueryHandler} type="text" placeholder='Search for a movie or tv show...' />
                        <button>Search </button>
                    </div>
                </div>
            
        </ContentWrapper>
    </div>
  )
}

export default HeroBanner
