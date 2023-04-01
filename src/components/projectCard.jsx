import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'
import '../styles/projectCard.css'

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


export const ProjectCard = ({info,src}) => {
  return (
      <div className="projectCard">
          
          <div className="Left">
              <Swiper
                direction={"vertical"}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {src.map((e)=><SwiperSlide><img src={e} alt="" /></SwiperSlide>)}
                  
        
      </Swiper>
              
          </div>
          <div className="Right">
              <p>{ info}</p>
          </div>
    </div>
  )
}





export default ProjectCard;