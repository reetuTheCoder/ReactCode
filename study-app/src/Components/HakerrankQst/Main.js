import React from 'react'
import Slides from './Slides'
import { Slide_data } from './SlideData'
import VoteComponent from './VoteComponent'
import FeedbackSystem from './FeedbackSystem'

const Main = () => {
  return (
    <div>
        {/* <Slides slides={Slide_data}/> */}

        <VoteComponent/>
        {/* <FeedbackSystem/> */}
    </div>
  )
}

export default Main