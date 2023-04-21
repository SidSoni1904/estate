import React from "react";
import "../Components/Page4.css";
import vector1 from "../Images/vector1.png";
import vector2 from "../Images/Vector2.png";
import vector3 from "../Images/Vector3.png";
import vector4 from "../Images/Vector4.png";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import person1 from "../Images/Ellipse 4.png";
import person2 from "../Images/Ellipse 5.png";
import person3 from "../Images/Ellipse 6.png";
import person4 from "../Images/Ellipse 7.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Typical from "react-typical";
import CountUp from "react-countup";

function Page4() {
  const { ref, inView } = useInView();
  const animationLeft = useAnimation();
  const animationRight = useAnimation();
  const span1 = useAnimation();
  const span2 = useAnimation();
  const span3 = useAnimation();
  const span4 = useAnimation();
  const p1 = useAnimation();
  const p2 = useAnimation();
  const p3 = useAnimation();
  const p4 = useAnimation();
  useEffect(() => {
    if (inView) {
      animationLeft.start({
        x: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
          duration: 2,
          delay: 0.5,
        },
      });

      span1.start({
        opacity: 1,
        transition: {
          delay: 1,
        },
      });

      span2.start({
        opacity: 1,
        transition: {
          delay: 2,
        },
      });

      span3.start({
        opacity: 1,
        transition: {
          delay: 3,
        },
      });

      span4.start({
        opacity: 1,
        transition: {
          delay: 4,
        },
      });

      animationRight.start({
        x: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
          duration: 2,
          delay: 0.5,
        },
      });

      p1.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        },
      });

      p2.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 2,
          ease: [0, 0.71, 0.2, 1.01],
        },
      });

       p3.start({
         opacity: 1,
         scale: 1,
         transition: {
           duration: 1,
           delay: 3,
           ease: [0, 0.71, 0.2, 1.01],
         },
       });
      
       p4.start({
         opacity: 1,
         scale: 1,
         transition: {
           duration: 1,
           delay: 4,
           ease: [0, 0.71, 0.2, 1.01],
         },
       });
    }

    if (!inView) {
      animationLeft.start({
        x: "-100vw",
      });

      animationRight.start({
        x: "100vw",
      });

      span1.start({
        opacity: 0,
      });

      span2.start({
        opacity: 0,
      });

      span3.start({
        opacity: 0,
      });

      span4.start({
        opacity: 0,
      });

      p1.start({
        opacity: 0,
        scale: 0.5,
      });

       p2.start({
         opacity: 0,
         scale: 0.5,
       });
      
       p3.start({
         opacity: 0,
         scale: 0.5,
       });
      
       p4.start({
         opacity: 0,
         scale: 0.5,
       });
    }
  }, [inView]);

  return (
    <div className="page4" id="selling" ref={ref}>
      <div className="container start-page-4">
        <div className="row">
          <motion.div animate={animationLeft} className="col-lg-6">
            <span id="benefits">Benefits</span>
            <h1 id="choose">Why Choose Us</h1>
            <p id="trustworthy">
              {inView && (
                <Typical
                  loop={Infinity}
                  wrapper="p"
                  steps={[
                    "Renty is a trustworthy developer in the real estate business. He has developed a reputation for trust and will have that reputation for years to come.",
                    1000,
                  ]}
                />
              )}
            </p>
            <div className="loyalty">
              <motion.span animate={span1}>
                <img src={vector1} alt="v1" />
                <span id="loyalty-benefits">Trusted Developer</span>
              </motion.span>
              <br></br>
              <motion.span animate={span2}>
                <img src={vector2} alt="v1" />
                <span id="loyalty-benefits">No Commisions</span>
              </motion.span>
              <br></br>
              <motion.span animate={span3}>
                <img src={vector3} alt="v1" />
                <motion.span id="loyalty-benefits">
                  A safe and Trustworthy
                </motion.span>
              </motion.span>
              <br></br>
              <motion.span animate={span4}>
                <img src={vector4} alt="v1" />
                <span id="loyalty-benefits">Buy with Confidence</span>
              </motion.span>
            </div>
          </motion.div>
          <motion.div animate={animationRight} className="col-lg-6 page4right">
            <Box
              className="page4box"
              sx={{
                width: 600,
                height: 600,
              }}
            >
              <div class="card employee">
                <div class="card-body">
                  {inView && (
                    <span id="emp-number">
                      <CountUp start={0} end={70} duration={2} delay={2} />+
                      Employee
                    </span>
                  )}

                  <div className="review-section">
                    <h6>
                      <StarIcon style={{ color: "white" }} />
                      <span id="number-reviews"> 4.9 </span>
                      <span id="reviews">(6.k reviews)</span>

                      <motion.img
                        animate={p1}
                        src={person1}
                        alt="person"
                        id="p1"
                      />

                      <motion.img
                        animate={p2}
                        src={person2}
                        alt="person"
                        id="p2"
                      />

                      <motion.img
                        animate={p3}
                        src={person3}
                        alt="person"
                        id="p3"
                      />

                      <motion.img
                        animate={p4}
                        src={person4}
                        alt="person"
                        id="p4"
                      />
                    </h6>
                  </div>
                </div>
              </div>
            </Box>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
