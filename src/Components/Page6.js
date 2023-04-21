import React, { useState } from 'react'
import "../Components/Page6.css"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Typical from "react-typical";
function Page6() {
  const { ref, inView } = useInView();
  const animateTop = useAnimation();
  const accordianAnimate = useAnimation();
  const accordianAnimate2 = useAnimation();
  const accordianAnimate3 = useAnimation();
  const accordianAnimate4 = useAnimation();

  useEffect(() => {
    if (inView) {
      animateTop.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: 1,
        },
      });

      accordianAnimate.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
          delay: 1
        }
      })

      accordianAnimate2.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
          delay: 2,
        },
      });

      accordianAnimate3.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
          delay: 3,
        },
      });

      accordianAnimate4.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
          delay: 4,
        },
      });
    }

    if (!inView) {
      animateTop.start({
        y: -200,
        opacity: 0,
      });
      
      accordianAnimate.start({
        opacity: 0,
        y: -20
      })

      accordianAnimate2.start({
        opacity: 0,
        y: -20,
      });

      accordianAnimate3.start({
        opacity: 0,
        y: -20,
      });

      accordianAnimate4.start({
        opacity: 0,
        y: -20,
      });
    }
    
  }, [inView])
  

  const [isExpandable, setisExpandable] = useState(true)
  const [changeBGcolor, setchangeBGcolor] = useState(true)
  
  const [isExpandable2, setisExpandable2] = useState(true);
  const [changeBGcolor2, setchangeBGcolor2] = useState(true);

  const [isExpandable3, setisExpandable3] = useState(true);
  const [changeBGcolor3, setchangeBGcolor3] = useState(true);

  const [isExpandable4, setisExpandable4] = useState(true);
  const [changeBGcolor4, setchangeBGcolor4] = useState(true);
   
    function handleExpand() {
        if (isExpandable) {
            setisExpandable(false)
            setchangeBGcolor(false)
        } else {
            setisExpandable(true)
            setchangeBGcolor(true)
        }
  }
  
  function handleExpand2() {
    if (isExpandable2) {
      setisExpandable2(false);
      setchangeBGcolor2(false);
    } else {
      setisExpandable2(true);
      setchangeBGcolor2(true);
    }
  }

  function handleExpand3() {
    if (isExpandable3) {
      setisExpandable3(false);
      setchangeBGcolor3(false);
    } else {
      setisExpandable3(true);
      setchangeBGcolor3(true);
    }
  }

  function handleExpand4() {
    if (isExpandable4) {
      setisExpandable4(false);
      setchangeBGcolor4(false);
    } else {
      setisExpandable4(true);
      setchangeBGcolor4(true);
    }
  }
  return (
    <div className="page6" id="about" ref={ref}>
      <div className="container text-center start-page-6">
        <motion.h1 animate={animateTop} id="faq">
          FAQ’s – Frequently Asked Questions
        </motion.h1>
        {/* <div className="content"> */}
        <center>
          <p id="page-6-p">
            {inView && (
              <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                  " As you might imagine, real estate agents field quite a few questions every day.People are naturally curious, and it’s an agent’s job to guide.",
                  1000,
                ]}
              />
            )}
          </p>
        </center>
        {/* </div> */}
        <div className="myaccordian row  d-flex justify-content-center m-5 p-4">
          {/* accordian 1 */}
          <motion.div animate={accordianAnimate} className="style-accordians">
            <Accordion
              animate={accordianAnimate}
              className="myacc"
              style={{ width: "900px", border: "1px solid #1FAB71" }}
              sx={
                changeBGcolor
                  ? { backgroundColor: "transparent" }
                  : { backgroundColor: "#1FAB71" }
              }
            >
              <AccordionSummary
                expandIcon={
                  isExpandable ? (
                    <AddIcon sx={{ color: "white" }} />
                  ) : (
                    <CloseIcon sx={{ color: "white" }} />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={handleExpand}
              >
                <Typography
                  className="typo"
                  sx={{
                    fontFamily: "sora",
                    fontWeight: "400px",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  How can I build equity into my house?
                </Typography>
              </AccordionSummary>
              <Typography style={{ color: "white" }}>
                You can build equity in three ways. First (and easiest) is from
                market appreciation. Second, when making your monthly mortgage
                payment, try to send a little bit more.
              </Typography>
            </Accordion>
          </motion.div>
          {/* end accordian 1 */}
          {/* start accordian 2 */}
          <motion.div animate={accordianAnimate2} className="style-accordians">
            <Accordion
              style={{
                width: "900px",
                border: "1px solid #1FAB71",
                marginTop: "20px",
              }}
              sx={
                changeBGcolor2
                  ? { backgroundColor: "transparent" }
                  : { backgroundColor: "#1FAB71" }
              }
            >
              <AccordionSummary
                expandIcon={
                  isExpandable2 ? (
                    <AddIcon sx={{ color: "white" }} />
                  ) : (
                    <CloseIcon sx={{ color: "white" }} />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={handleExpand2}
              >
                <Typography
                  sx={{
                    fontFamily: "sora",
                    fontWeight: "600px",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  How big is an acre?
                </Typography>
              </AccordionSummary>

              <Typography style={{ color: "white" }}>
                You can build equity in three ways. First (and easiest) is from
                market appreciation. Second, when making your monthly mortgage
                payment, try to send a little bit more.
              </Typography>
            </Accordion>
          </motion.div>
          {/* end accordian 2  */}
          {/* start accordian 3 */}
          <motion.div animate={accordianAnimate3} className="style-accordians">
            <Accordion
              style={{
                width: "900px",
                border: "1px solid #1FAB71",
                marginTop: "20px",
              }}
              sx={
                changeBGcolor3
                  ? { backgroundColor: "transparent" }
                  : { backgroundColor: "#1FAB71" }
              }
            >
              <AccordionSummary
                expandIcon={
                  isExpandable3 ? (
                    <AddIcon sx={{ color: "white" }} />
                  ) : (
                    <CloseIcon sx={{ color: "white" }} />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={handleExpand3}
              >
                <Typography
                  sx={{
                    fontFamily: "sora",
                    fontWeight: "600px",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  What are closing costs?
                </Typography>
              </AccordionSummary>

              <Typography style={{ color: "white" }}>
                You can build equity in three ways. First (and easiest) is from
                market appreciation. Second, when making your monthly mortgage
                payment, try to send a little bit more.
              </Typography>
            </Accordion>
          </motion.div>
          {/* end accordian 3 */}
          {/* start accordian 4 */}
          <motion.div animate={accordianAnimate4} className="style-accordians">
            <Accordion
              style={{
                width: "900px",
                border: "1px solid #1FAB71",
                marginTop: "20px",
              }}
              sx={
                changeBGcolor4
                  ? { backgroundColor: "transparent" }
                  : { backgroundColor: "#1FAB71" }
              }
            >
              <AccordionSummary
                expandIcon={
                  isExpandable4 ? (
                    <AddIcon sx={{ color: "white" }} />
                  ) : (
                    <CloseIcon sx={{ color: "white" }} />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={handleExpand4}
              >
                <Typography
                  sx={{
                    fontFamily: "sora",
                    fontWeight: "600px",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  What is Title Insurance?
                </Typography>
              </AccordionSummary>

              <Typography style={{ color: "white" }}>
                You can build equity in three ways. First (and easiest) is from
                market appreciation. Second, when making your monthly mortgage
                payment, try to send a little bit more.
              </Typography>
            </Accordion>
          </motion.div>
          {/* end accordian 4 */}
        </div>
      </div>
    </div>
  );
}

export default Page6