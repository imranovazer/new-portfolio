import React from "react";
import '../styles/projects.css'
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/data";
import { Prioritet } from "../data/data";
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
        <div className="Fullstack">
          <div className="Prioritet"> 
            <a href={Prioritet.MonoFi.link}>
            <img src={Prioritet.MonoFi.image} alt="" srcset="" />
              </a>
            <div className="under">
              {Prioritet.MonoFi.title}
            </div>
          </div>
          <div className="Prioritet"> 
            <a href={Prioritet.Blog.link}>
            <img src={Prioritet.Blog.image} alt="" srcset="" />
              </a>
            <div className="under">
              {Prioritet.Blog.title}
            </div>
          </div>
          
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
                  <img src={e.src} className="swipeImages" />
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