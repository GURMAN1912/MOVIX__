import React, { useState } from 'react'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import SwitchTab from '../../../components/SwitchTabs/SwitchTab'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'
const Trending = () => {
    const [endPoint,setEndPoint]=useState('day')

    const{data,loading}=useFetch(`/trending/all/${endPoint}`)

    const onChangeTab=(tab,index)=>{
        setEndPoint(tab==="Day"?"day":"week");
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
                <span className='carouselTitle'>
                    Trending
                </span>
                <SwitchTab data={["Day","week"]} onChangeTab={onChangeTab}/>
        </ContentWrapper> 
        <Carousel data={data?.results} loading={loading}/>     
    </div>
  )
}

export default Trending
