import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const ProjectMedia = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselWrap>
      <Carousel
        data-bs-theme="dark"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="project-media" src={props.images1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="project-media" src={props.images2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="project-media" src={props.images3} alt="" />
        </Carousel.Item>
      </Carousel>
    </CarouselWrap>
  );
};

const CarouselWrap = styled.div`
  display: block;
  height: 400px;
  padding-bottom: 30px;
`;

export default ProjectMedia;
