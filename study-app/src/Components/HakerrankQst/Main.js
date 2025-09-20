import React from 'react'
import Slides from './Slides'
import { Slide_data } from './SlideData'

const Main = () => {
  return (
    <div>
        <Slides slides={Slide_data}/>
    </div>
  )
}

export default Main