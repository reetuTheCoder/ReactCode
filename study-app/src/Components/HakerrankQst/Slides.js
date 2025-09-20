import React, { useState } from "react";

const Slides = ({ slides }) => {
  console.log(slides);

  const [slideIndx, setSlideIndx] = useState(0);

  const handleNextSlide = () => {
    // setSlideIndx((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    if (slideIndx < slides.length - 1) {
      setSlideIndx((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    // setSlideIndx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    if (slideIndx > 0) {
      setSlideIndx((prev) => prev - 1);
        
    }
  };


  const handleResetSlide = () => {
   setSlideIndx(0)
  }
  return (
    <div>
      <div>
         <button onClick={handleResetSlide} disabled={slideIndx === 0}>
          Reset
        </button>
        <button onClick={handlePrevSlide} disabled={slideIndx === 0}>
          Prev
        </button>
        <button onClick={handleNextSlide} disabled={slideIndx === slides.length -1}>Next</button>
      </div>
      <div>
        <h1>{slides[slideIndx].title}</h1>
        <p>{slides[slideIndx].text}</p>
      </div>
    </div>
  );
};

export default Slides;
