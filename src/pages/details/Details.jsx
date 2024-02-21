import React from 'react'
import './styles.scss'
import { useParams } from 'react-router-dom'
import DetailsBanner from './DetailsBanner/DetailsBanner'
import UseFetch from '../../hooks/UseFetch'
import Cast from './cast/Cast'
import VideosSection from './videoSection/VideosSection'
import Similar from '../carousel/Similar'
import Recommendation from '../carousel/Recommendation'
export default function Details() {
  const {mediaType,id}=useParams();
  const {data,loading}=UseFetch(`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsLoading}=UseFetch(`/${mediaType}/${id}/credits`)
  console.log(credits?.crew)
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} />
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>

  )
}
