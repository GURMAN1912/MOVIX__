import React, { useState } from 'react'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import SwitchTab from '../../../components/SwitchTabs/SwitchTab'
import useFetch from '../../../hooks/UseFetch'
import Carousel from '../../../components/carousel/Carousel'
const TopRated = () => {
    const [endPoint,setEndPoint]=useState('movie')

    const{data,loading}=useFetch(`/${endPoint}/top_rated`)

    const onChangeTab=(tab,index)=>{
        setEndPoint(tab==="Movies"?"movie":"tv");
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
                <span className='carouselTitle'>
                    What's Popular
                </span>
                <SwitchTab data={["Movies","Tv Shows"]} onChangeTab={onChangeTab}/>
        </ContentWrapper> 
        <Carousel data={data?.results} loading={loading}/>     
    </div>
  )
}

export default TopRated;
