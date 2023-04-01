import React from "react";
import '../styles/projects.css'
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/data";
import { Prioritet } from "../data/data";
import ProjectCard from "./projectCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Projects = () => {
    return (<div className="ProjectsContainer">
        
      <div className="container forProjects">
        <div className="projectsText">
          My projects: 

        </div>

        <div className="ContainerForProjects">
          {
            data.map((e, i) => <ProjectCard key={ i} info={e.info} src={e.src} />)
          }

        </div>
        <div className="Fullstack">
          
          
        </div>
        <div className="swiperContain">
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
          >
            {
              data.map((e,i) => <SwiperSlide key={i}>
                <div className="box">
                  <img src={e.src[0]} className="swipeImages" />
                  <div className="itemInfo">
                    <div className="info">
                      {e.info}

                    </div>
                    <div className="info links">
                      <a href={e.link}>
                        <i class='bx bx-link-external'></i>
                      </a>

                    </div>

                  </div>
                </div>
              </SwiperSlide>
                )
            }
            
        
        
      </Swiper>


        </div>

            
            
           
        </div>
    </div>)
}

export default Projects 