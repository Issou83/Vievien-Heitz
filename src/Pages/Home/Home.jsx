import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import "./index.css";
import carouselData from "../../components/Carousel/HomeData.json";

const Home = () => {
  return (
    <div className="home">
      {/* <div className="banner">
        <h1>Photographe et pationné</h1>
      </div> */}
      <div className="exemplePhotos">
      <Carousel carouselData={carouselData} key={carouselData.title} />
      </div>
    </div>
  );
};

export default Home;
