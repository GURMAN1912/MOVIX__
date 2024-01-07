import React from 'react'
import './styles.scss'
import { useParams } from 'react-router-dom'
import DetailsBanner from './DetailsBanner/DetailsBanner'
import useFetch from '../../hooks/useFetch'

export default function Details() {
  const {mediaType,id}=useParams();
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsLoading}=useFetch(`/${mediaType}/${id}/credits`)
  return (
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew } />

  )
}
