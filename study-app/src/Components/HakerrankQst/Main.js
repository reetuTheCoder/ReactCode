import React from 'react'
import Slides from './Slides'
import { Slide_data } from './SlideData'
import VoteComponent from './VoteComponent'

const Main = () => {
  return (
    <div>
        {/* <Slides slides={Slide_data}/> */}

        <VoteComponent/>
    </div>
  )
}

export default Main