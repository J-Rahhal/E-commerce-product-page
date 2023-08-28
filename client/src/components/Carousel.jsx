import { useState } from "react";
import carousel from "../constants/constant.js";
import Next from "../assets/images/icon-next.svg";
import Prev from "../assets/images/icon-previous.svg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const GoToPrevIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );
  };

  const GoToNextIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="relative">
      <button
        onClick={GoToPrevIndex}
        className="absolute top-1/2 left-2 bg-white px-3 py-3 rounded-full"
      >
        <img src={Prev} alt="Previous button" className="w-3/4" />
      </button>
      <div>
        <img
          src={carousel[currentIndex].img}
          alt={`Carousel Image ${currentIndex}`}
        />
      </div>
      <button
        onClick={GoToNextIndex}
        className="absolute top-1/2 right-2 bg-white px-3 py-3 rounded-full"
      >
        <img src={Next} alt="Next button" className="w-3/4" />
      </button>
    </div>
  );
};
export default Carousel;
