import React from 'react'
import "../Components/Page7.css"
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TextField, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const CSSTextField = styled(TextField)({
  "& .MuiInput-underline:before": {
    borderBottomColor: "grey",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#1FAB71",
  },
});

const variants = {
   whilehover:{
                type: "spring",
                stifness: 320,
                scale: 1.3,
                originX: 0,
              }
}



function Page7() {
  const {ref,inView} = useInView()
  const animation = useAnimation()
  const animation2 = useAnimation()
  const animateBtn = useAnimation()
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",duration: 1,bounce: 0.3
        }
      })

      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });

      animateBtn.start({
        scale: 1,
        rotateZ: 360,
        x: [0, -20, 20, -20, 20, 0],
        transition: { delay: 1 },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw"
      })

      animation2.start({
        x: "100vw",
      });

      animateBtn.start({
        scale: 0
      })
    }
   console.log(inView)
  },[inView])
  
  return (
    <div className="page7" id="contact" ref={ref}>
      <div className="container">
        <div className="row RentyFooter">
          <motion.div animate={animation} className="col-lg-7 ">
            <span id="renty">More Renty</span>
            <div className="row  myfooterlinks">
              <motion.span variants={variants} whileHover="whilehover">
                FAQ
              </motion.span>
              <motion.span variants={variants} whileHover="whilehover">
                About us
              </motion.span>
              <motion.span variants={variants} whileHover="whilehover">
                Contact Us
              </motion.span>
              <motion.span variants={variants} whileHover="whilehover">
                Feedback
              </motion.span>
              <motion.span variants={variants} whileHover="whilehover">
                Join Our Community
              </motion.span>
              <motion.span variants={variants} whileHover="whilehover">
                Agent support
              </motion.span>
              <div className="col social">
                <span>
                  <InstagramIcon />
                </span>
                <span>
                  <FacebookIcon sx={{ marginLeft: "20px" }} />
                </span>
                <span>
                  <LinkedInIcon sx={{ marginLeft: "20px" }} />
                </span>
                <span>
                  <TwitterIcon sx={{ marginLeft: "20px" }} />
                </span>
              </div>
              <div className="renty-desc">
                <span>
                  Renty Group is committed to ensuring digital accessibility for
                  individuals with disabilities. We are continuously working to
                  improve the accessibility of our web experience for everyone.
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div animate={animation2} className="col-lg-5 letsconnect">
            <span id="stay-connect">Stay connected</span>
            <p id="sign-up">
              Sign up for inspiration for nourishing your body, mind and shine
              from inside. Added bonus: you'll get 10% off your first Renty
              order.
            </p>
            <CSSTextField
              InputLabelProps={{ className: "textfield__label" }}
              className="email"
              id="standard-basic"
              label="Email"
              variant="standard"
              fullWidth
            />
            <br></br>
            <motion.button
              animate={animateBtn}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
                transition: {
                  duration: 0.3,
                  yoyo: Infinity,
                },
              }}
              id="subscribe"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
        <hr style={{ color: "white" }}></hr>
        <div className="last-items">
          <span>©uihut.com 2022. All Rights Reserved.</span>
          <div className="right-last-items">
            <span>Terms of Use</span>
            <span id='privacy'>Terms & Privacy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page7