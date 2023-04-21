import React from "react";
import "../Components/Page2.css";
import EastIcon from "@mui/icons-material/East";
import card1 from "../Images/card1.png"
import card2 from "../Images/card2.png"
import card3 from "../Images/card3.png"
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import BedIcon from "@mui/icons-material/Bed";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import squarelogo from "../Images/SquareLogo.png"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Page2() {
  const { ref, inView } = useInView({
    threshold: 0,
    trackVisibility: true,
    delay: 100,
  });
  const animation = useAnimation();
  const FirstCardAnimation = useAnimation();
  const SecondCardAnimation = useAnimation();
  const ThirdCardAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          delay: 1,
          bounce: 0.3,
        },
      });

      FirstCardAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          delay: 1,
          stiffness: 100
        },
      });

      SecondCardAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          delay: 1,
          stiffness: 100,
        },
      });

       ThirdCardAnimation.start({
         x: 0,
         transition: {
           type: "spring",
           duration: 1,
           delay: 1,
           stiffness: 100,
         },
       });
      
     
    }
    if (!inView) {
      animation.start({
        x: "100vw",
      });

      FirstCardAnimation.start({
        x: "-100vh",
      })

       SecondCardAnimation.start({
         y: "-30vh",
         opacity: 0
       });
     
       ThirdCardAnimation.start({
         x: "100vh",
       });
      
     
    }
    console.log(inView);
  }, [inView]);
  return (
    <div className="second-page" id="renting" ref={ref}>
      <motion.div animate={animation} className="container start-second-page">
        <p id="popular">Popular</p>
        <h1 id="residance">Our Popular Residance</h1>
        <div className="popular-services">
          <motion.p
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              transition: {
                duration: 0.3,
                yoyo: Infinity,
              },
            }}
            id="myexplore"
            style={{ color: "white", marginRight: "20px" }}
          >
            Explore
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, repeat: Infinity }}
            >
              <ArrowForwardIosIcon />
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, repeat: Infinity }}
            >
              <ArrowForwardIosIcon />
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, repeat: Infinity }}
            >
              <ArrowForwardIosIcon />
            </motion.span>
          </motion.p>
        </div>
      </motion.div>
      <div class="container myallcards">
        <div class="row">
          <div class="col-lg-4 ">
            <motion.div animate={FirstCardAnimation} class="card cards">
              <div className="inner-zoom">
                <img src={card1} class="card-img-top" alt="..." />
              </div>
              <div class="card-body my-card-body">
                <p class="card-text">
                  <FmdGoodIcon style={{ color: "#1FAB71" }} />
                  <span style={{ marginLeft: "10px" }}>Jakarta Barat, USA</span>
                </p>
                <p class="card-text">
                  <BedIcon /> <span id="service">4 Bed</span>
                  <AspectRatioIcon style={{ marginLeft: "10px" }} />
                  <span id="service">10x10m</span>
                  <img
                    src={squarelogo}
                    style={{ marginLeft: "10px" }}
                    alt="square"
                  />
                  <span id="service">1900s </span>
                </p>
                <button id="booknow">Book Now</button>
                <span id="card-span">$5,200,000</span>
              </div>
            </motion.div>
          </div>
          <div class="col-lg-4 ">
            <motion.div animate={SecondCardAnimation} class="card cards">
              <div className="inner-zoom">
                <img src={card2} class="card-img-top" alt="..." />
              </div>
              <div class="card-body my-card-body">
                <p class="card-text">
                  <FmdGoodIcon style={{ color: "#1FAB71" }} />
                  <span style={{ marginLeft: "10px" }}>
                    Jakarta Barat, London
                  </span>
                </p>
                <p class="card-text">
                  <BedIcon /> <span id="service">5 Bed</span>
                  <AspectRatioIcon style={{ marginLeft: "10px" }} />
                  <span id="service">10x10m</span>
                  <img src={squarelogo} style={{ marginLeft: "10px" }} />
                  <span id="service">1900s </span>
                </p>
                <button id="booknow">Book Now</button>
                <span id="card-span">$4,300,000</span>
              </div>
            </motion.div>
          </div>
          <div class="col-lg-4 ">
            <motion.div animate={ThirdCardAnimation} class="card cards">
              <div className="inner-zoom">
                <img src={card3} class="card-img-top" alt="..." />
              </div>
              <div class="card-body my-card-body">
                <p class="card-text">
                  <FmdGoodIcon style={{ color: "#1FAB71" }} />
                  <span style={{ marginLeft: "10px" }}>
                    Jakarta Barat, Japan
                  </span>
                </p>
                <p class="card-text">
                  <BedIcon /> <span id="service">6 Bed</span>
                  <AspectRatioIcon style={{ marginLeft: "10px" }} />
                  <span id="service">10x10m</span>
                  <img src={squarelogo} style={{ marginLeft: "10px" }} />
                  <span id="service">1900s </span>
                </p>
                <button id="booknow">Book Now</button>
                <span id="card-span">$7,000,000</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="intersect-pattern"></div>
      <div className="popular-services2">
        <span id="myexplore" style={{ color: "white" }}>
          Explore <EastIcon />
        </span>
      </div>
    </div>
  );
}

export default Page2;
