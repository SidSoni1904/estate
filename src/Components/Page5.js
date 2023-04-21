import React from "react";
import "../Components/Page5.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import sliderimg1 from "../Images/sliderimg2.png"
import sliderimg2 from "../Images/sliderimg3.png"
import "../Components/Page4Slider1.css"
import "../Components/Page4Slider2.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
}

function Page5() {
  const { ref, inView } = useInView();
  const animation1 = useAnimation()
  const SliderImages = useAnimation();
  const SliderImages2 = useAnimation();
  useEffect(() => {
   if (inView) {
     animation1.start({
       y: 0,
       opacity: 1,
       transition: {
         delay: 1,
       }
     });

     SliderImages.start({
       y: 0,
       opacity: 1,
       transition: {
         type:"spring",
         stiffness: 100,
         delay: 1,
       },
     });

      SliderImages2.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          delay: 1,
        },
      });
    }
     if (!inView) {
       animation1.start({
         y: 200,
         opacity: 0
       });

        SliderImages.start({
          y: -200,
          opacity: 0,
        });
       
       SliderImages2.start({
         y: 200,
         opacity: 0,
       });
     }
  }, [inView])
  

   const slider = React.useRef(null);
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  return (
    <div className="page5" ref={ref}>
      <div className="container start-page5">
        <div className="row">
          <div className="col-7">
            <motion.span animate={animation1} id="page5-popular">
              Popular
            </motion.span>
            <motion.h1 animate={animation1} id="news">
              Homes for Renty News And Stories
            </motion.h1>
          </div>
          <div className="col-4">
            <div className="arrow-buttons">
              <motion.button
                animate={SliderImages}
                id="arrow-buttons"
                type="button"
                class="btn btn-outline-light "
                onClick={() => slider?.current?.slickPrev()}
              >
                <KeyboardArrowLeftIcon />
              </motion.button>
              <motion.button
                animate={SliderImages2}
                style={{ marginLeft: "10px" }}
                id="arrow-buttons"
                type="button"
                class="btn btn-outline-light "
                onClick={() => slider?.current?.slickNext()}
              >
                <KeyboardArrowRightIcon />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="myslider">
          <Slider ref={slider} {...settings}>
            <motion.div animate={SliderImages}>
              <div class="image">
                <img src={sliderimg1} id="slider-images" alt="slider-images" />
                <div class="image__overlay image__overlay--primary">
                  <div class="image__title">Uptake Infotech</div>
                  <button type="button" class="btn btn-outline-success">
                    View Destination
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div animate={SliderImages2}>
              <div class="image">
                <img src={sliderimg2} id="slider-images" alt="slider-images" />
                <div class="image__overlay image__overlay--primary">
                  <div class="image__title">Uptake Infotech</div>
                  <button type="button" class="btn btn-outline-success">
                    View Destination
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div animate={SliderImages}>
              <div class="image">
                <img src={sliderimg1} id="slider-images" alt="slider-images" />
                <div class="image__overlay image__overlay--primary">
                  <div class="image__title">Uptake Infotech</div>
                  <button type="button" class="btn btn-outline-success">
                    View Destination
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div animate={SliderImages2}>
              <div class="image">
                <img src={sliderimg2} id="slider-images" alt="slider-images" />
                <div class="image__overlay image__overlay--primary">
                  <div class="image__title">Uptake Infotech</div>
                  <button type="button" class="btn btn-outline-success">
                    View Destination
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div animate={SliderImages}>
              <div class="image">
                <img src={sliderimg1} id="slider-images" alt="slider-images" />
                <div class="image__overlay image__overlay--primary">
                  <div class="image__title">Uptake Infotech</div>
                  <button type="button" class="btn btn-outline-success">
                    View Destination
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div animate={SliderImages2}>
              <div class="image">
                <img src={sliderimg2} id="slider-images" alt="slider-images" />
                <div class="image__overlay image__overlay--primary">
                  <div class="image__title">Uptake Infotech</div>
                  <button type="button" class="btn btn-outline-success">
                    View Destination
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div animate={SliderImages}>
              <div class="image">
                <img src={sliderimg1} id="slider-images" alt="slider-images" />
                <div class="image__overlay image__overlay--primary">
                  <div class="image__title">Uptake Infotech</div>
                  <button type="button" class="btn btn-outline-success">
                    View Destination
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div animate={SliderImages2}>
              <div class="image">
                <img src={sliderimg2} id="slider-images" alt="slider-images" />
                <div class="image__overlay image__overlay--primary">
                  <div class="image__title">Uptake Infotech</div>
                  <button type="button" class="btn btn-outline-success">
                    View Destination
                  </button>
                </div>
              </div>
            </motion.div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Page5;
