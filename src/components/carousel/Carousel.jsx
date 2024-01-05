import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Img from "../lazyLoadImg/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./styles.scss";



export default function Carousel({data,loading}) {
    const carouselContainer=useRef();
    const {url}=useSelector((state)=>state.home)
    const navigate=useNavigate();
    const navigation=(dir)=>{

    }
    console.log(loading)
    console.log(data)
  return (

    <div className="carousel">
        <ContentWrapper>
            <BsFillArrowLeftCircleFill 
                className="carouselLeftNav arrow"
                onClick={()=>navigation('left')}
            />
            <BsFillArrowRightCircleFill
                className="carouselRightNav arrow"
                onClick={()=>navigation('right')}
            />
            {!loading?(
                <div className="carouselItems">
                    {data?.map((item)=>{
                        const posterUrl=item.poster_path? url.poster+item.poster_path:PosterFallback;
                        console.log(posterUrl)
                        return(
                            <div className="carouselItem" key={item.id}>
                                <div className="posterBlock">
                                    <Img src={posterUrl}/>
                                </div>
                                <div className="textBlock">
                                    <span className="title">
                                        {item.title||item.name}
                                    </span>
                                </div>
                            </div>
                        )
                        })}
                </div>

            ):(
                <span>Loading...</span>
            )

            }
        </ContentWrapper>
    </div>
  )
}
