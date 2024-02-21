import React, { useState } from 'react'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import SwitchTab from '../../../components/SwitchTabs/SwitchTab'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'
const Popular = () => {
    const [endPoint,setEndPoint]=useState('movie')

    const{data,loading}=useFetch(`/${endPoint}/popular`)

    const onChangeTab=(tab,index)=>{
        setEndPoint(tab==="Movies"?"movie":"tv");
        console.log(endPoint)
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

export default Popular
