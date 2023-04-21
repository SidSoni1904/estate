import React from 'react'
import "../Components/Page3.css"
import page3IMG from "../Images/page3-img.png"
import ninja from "../Images/ninja.svg"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
function Page3() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const SecondAnimation = useAnimation()
  const animateLeft =useAnimation()
  const ListAnimate1 = useAnimation()
  const ListAnimate2 = useAnimation();
  const ListAnimate3 = useAnimation();
  const ListAnimate4 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          duration: 2,
          delay: 0.5
        },
      });

      animateLeft.start({
        x: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
          duration: 2,
          delay: 0.5,
        },
      });
      SecondAnimation.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
          delay: 0.5
        },
      });

      ListAnimate1.start({
        opacity: 1,
        transition: {
          delay: 1,
        }
      });

       ListAnimate2.start({
         opacity: 1,
         transition: {
           delay: 2,
         },
       });

       
       ListAnimate3.start({
         opacity: 1,
         transition: {
           delay: 3,
         },
       });

      
       ListAnimate4.start({
         opacity: 1,
         transition: {
           delay: 4,
         },
       });

    }

    if (!inView) {
      animation.start({
        opacity: 0,
        x: 100,
      });

      animateLeft.start({
        x : "-100vw"
      })
      SecondAnimation.start({
        opacity: 0,
        x: -20,
        y: 10,
      });

      ListAnimate1.start({
        opacity: 0,
      })

      ListAnimate2.start({
        opacity: 0,
      });

      ListAnimate3.start({
        opacity: 0,
      });

      ListAnimate4.start({
        opacity: 0,
      });
    }
  }, [inView])
  
  return (
    <div className="page3" id="my-head-service" ref={ref}>
      <div class="container ">
        <div class="row flex-column-reverse flex-lg-row">
          <motion.div animate={animateLeft} class="col-lg-6 card-hover-effect">
            <img src={page3IMG} alt="page destination" id="pageimg" />
            <div className="my-card-content">
              <h1 className="my-card-title">NYC</h1>
              <p className="my-card-p">New York City</p>
              <p className="my-card-info">
                New York City comprises 5 boroughs sitting where the Hudson
                River meets the Atlantic Ocean. At its core is Manhattan, a
                densely populated borough that’s among the world’s major
                commercial, financial and cultural centers.
              </p>
              <button className='my-card-btn'>Book Now</button>
            </div>
          </motion.div>
          <div class="col-lg-5 myservices">
            <motion.span animate={animation} id="our-services">
              Our Services
            </motion.span>
            <motion.h1 animate={animation} id="comfort">
              We make your comfort our top priority.
            </motion.h1>
            <motion.p animate={SecondAnimation} id="dialogue">
              In a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best.
            </motion.p>
            <div className="row ninja-group">
              <div className="col-4">
                <motion.img
                  animate={ListAnimate1}
                  src={ninja}
                  alt="ninja svg"
                />
                <motion.span animate={ListAnimate1} id="ninja-text">
                  Best Market
                </motion.span>
                <br></br>
                <br></br>
                <motion.img
                  animate={ListAnimate3}
                  src={ninja}
                  alt="ninja svg"
                />
                <motion.span animate={ListAnimate3} id="ninja-text">
                  Top Sell
                </motion.span>
              </div>
              <div className="col-5">
                <motion.img
                  animate={ListAnimate2}
                  src={ninja}
                  alt="ninja svg"
                />
                <motion.span animate={ListAnimate2} id="ninja-text">
                  Unstable Prices
                </motion.span>
                <br></br>
                <br></br>
                <motion.img
                  animate={ListAnimate4}
                  src={ninja}
                  alt="ninja svg"
                />
                <motion.span animate={ListAnimate4} id="ninja-text">
                  Security of data
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3