import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const Carousel = ({ carouselData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [isCarouselFullscreen, setIsCarouselFullscreen] = useState(false);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  const handleClickFullScreen = () => {
    setIsCarouselFullscreen(true);
  };

  const handleClickExitFullscreen = () => {
    setIsCarouselFullscreen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    beforeChange: handleBeforeChange,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const totalSlides = carouselData.length;
      const nextSlide = (currentSlide + 1) % totalSlides;
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(nextSlide);
        setCurrentSlide(nextSlide);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length, currentSlide]);

  return (
    <div className={`carousel-container${isCarouselFullscreen ? ' carousel-fullscreen' : ''}`}>
      {isCarouselFullscreen && (
        <button className="exit-fullscreen" onClick={handleClickExitFullscreen}>RETOUR</button>
      )}
      <Slider {...settings} ref={sliderRef}>
        {carouselData.map((item, index) => (
          <div className="imgCarousel" key={index}>
            <div className="carousel-text">
              {/* <h2>{item.title}</h2>
              <p>{item.description}</p> */}
            </div>
            <img
              src={item.image}
              alt={item.title}
              // style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
      {!isCarouselFullscreen && (
        <button className="fullscreen-button" onClick={handleClickFullScreen}>PLEIN ECRAN</button>
      )}
      <div className="carousel-indicators">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`indicator-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => {
              if (sliderRef.current) {
                sliderRef.current.slickGoTo(index);
                setCurrentSlide(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
