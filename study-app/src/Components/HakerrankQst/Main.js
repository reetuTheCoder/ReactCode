import React from 'react'
import Slides from './Slides'
import { Slide_data } from './SlideData'
import VoteComponent from './VoteComponent'
import FeedbackSystem from './FeedbackSystem'
import BlogPost from './BlogPost'

const Main = () => {
  return (
    <div>
        {/* <Slides slides={Slide_data}/> */}

        {/* <VoteComponent/>
        <FeedbackSystem/> */}
        <BlogPost/>
    </div>
  )
}

export default Main