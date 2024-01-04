import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
export default function Img({src,classname}) {
  return (
    <LazyLoadImage className={classname||''}
        alt=''
        effect='blur'
        src={src}/>
  )
}
