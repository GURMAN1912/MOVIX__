import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./styles.scss";
import { PlayButton } from "../PlayButton";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImg/Img";
import PosterFallback from "../../../assets/no-poster.png";

const DetailsBanner = ({ video, crew }) => {
    const {mediaType,id}=useParams();
  const {data,loading}=useFetch(`/${mediaType}/${id}`)
  const{url}=useSelector((state)=> state.home)
  const _genres=data?.genres?.map((g)=>g.id)
  const director=crew?.filter((f)=>f.job==="Director")
  const writer=crew?.filter((f)=>f.job==="Writer"||f.jobs==="Screenplay"||f.jobs==='Story')

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? `${minutes}m` : ""}`;
    };

    return (
        <div className="detailsBanner">
            {!loading ? (
                <>
                    {!!data && (
                        <React.Fragment>
                            <div className="backdrop-img">
                                <Img src={url.backdrop+data?.backdrop_path}/>
                            </div>
                            <div className="opacity-layer">

                            </div>
                        <ContentWrapper>
                            <div className="content">
                                <div className="left">
                                    {data.poster_path?(
                                        <Img
                                        classname="posterImg"
                                        src={url.backdrop+data.poster_path}
                                        />
                                    ):(
                                        <Img
                                        classname='posterImg'
                                        src={PosterFallback}/>
                                    )}
                                </div>
                                <div className="right">
                                    <div className="title">
                                        {`${data.name||data.title}(${dayjs(data?.release_date).format("YYYY")})`}
                                    </div>
                                <div className="subtitle">
                                    {data.tagline}
                                </div>
                                <Genres data={_genres}/>
                                <div className="row">
                                    <CircleRating rating={data.vote_average.toFixed(1)}/>
                                </div>
                                <div className="playbtn">
                                    <PlayButton/>
                                    <span className="text">
                                        Watch Trailer
                                    </span>
                                </div>
                                <div className="overview">
                                    <div className="heading">
                                        Overview
                                    </div>
                                    <div className="description">
                                        {data.overview}
                                    </div>
                                </div>
                                <div className="info">
                                    {data.status&&(
                                        <div className="infoItem">
                                            <span className="text bold">
                                                Status:{""}
                                            </span>
                                            <span className="text">
                                                {data.status}
                                            </span>
                                        </div>
                                    )}
                                    {data.release_date&&(
                                        <div className="infoItem">
                                            <span className="text bold">
                                                Release date:{""}
                                            </span>
                                            <span className="text">
                                                {dayjs(data.release_date).format("MMM D,YYYY")}
                                            </span>
                                        </div>
                                    )}
                                    {data.runtime&&(
                                        <div className="infoItem">
                                            <span className="text bold">
                                                Runtime:{" "}
                                            </span>
                                            <span className="text">
                                                {toHoursAndMinutes(data.runtime)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                {director?.length>0 &&(
                                    <div className="info">
                                        <span className="text bold">
                                            Director:{" "}
                                        </span>
                                    </div>
                                )}
                            </div>
                            </div>
                        </ContentWrapper>
                        </React.Fragment>
                    )}
                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;

