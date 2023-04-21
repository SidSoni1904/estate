import React from "react";
import logo from "../Images/subtract.png";
import "../Components/Page1.css";
import location from "../Images/location.png";
import home from "../Images/home.png";
import Box from "@mui/material/Box";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { motion } from "framer-motion";
import Typical from "react-typical";
import CountUp from "react-countup";
import { useMotionValue, useTransform } from "framer-motion";
import Slider from "react-slick";
function Page1() {
  const slider = React.useRef(null);
   const settings = {
     dots: true,
     arrows: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
   };
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);
  
const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Jakarta,Indonesia",
    price : "5,200,000",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
];

  return (
    <>
      <div className="header">
        {/* header start */}
        <motion.nav
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
          class="container navbar navbar-expand-lg  bg-tranparent"
        >
          <a
            className="navbar-brand-hidden"
            href="#"
            style={{
              color: "white",
              fontWeight: "1000",
              fontSize: "16px",
            }}
          >
            <img src={logo} className="header-logo" alt="logo" />
            &nbsp; Renty
          </a>
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
                {/* buying */}
                <li class="nav-item buying-head">
                  <a
                    id="buying-navbar"
                    class="nav-link active"
                    aria-current="page"
                    href="#buying"
                    style={{
                      fontFamily: "poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    Buying
                  </a>
                </li>
                {/* Renting */}
                <li class="nav-item renting-head">
                  <a
                    id="renting-effect"
                    class="nav-link"
                    href="#renting"
                    style={{
                      fontFamily: "poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      marginLeft: "30px",
                    }}
                  >
                    Renting
                  </a>
                </li>
                {/* selling */}
                <li class="nav-item selling-head">
                  <a
                    id="mysell"
                    class="nav-link"
                    href="#selling"
                    style={{
                      fontFamily: "poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      marginLeft: "30px",
                    }}
                  >
                    Selling
                  </a>
                </li>
              </ul>
            </div>

            <span
              className="navbar-brand"
              href="#"
              style={{
                color: "white",
                fontWeight: "1000",
                fontSize: "16px",
                marginLeft: "220px",
              }}
            >
              <img src={logo} className="header-logo" alt="logo" />
              &nbsp; Renty
            </span>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul
                class="navbar-nav me-auto mb mb-lg-0"
                style={{ paddingLeft: "220px" }}
              >
                <li class="nav-item  about-us-head">
                  <a
                    id="abt"
                    class="nav-link active"
                    aria-current="page"
                    href="#about"
                    style={{
                      fontFamily: "poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    AboutUs
                  </a>
                </li>
                <li class="nav-item service-head">
                  <a
                    id="serve"
                    class="nav-link"
                    href="#my-head-service"
                    style={{
                      fontFamily: "poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      marginLeft: "30px",
                    }}
                  >
                    Services
                  </a>
                </li>
                <li class="nav-item contact-head">
                  <a
                    id="cont"
                    class="nav-link"
                    href="#contact"
                    style={{
                      fontFamily: "poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      marginLeft: "30px",
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.nav>
        {/* header ends */}
        {/* body start 1 */}
        <div className="container body-start">
          <div
            class="row flex-column-reverse flex-lg-row"
            style={{ color: "white", perspective: 2000 }}
          >
            <motion.div
              style={{ x, y, rotateX, rotateY, z: 100 }}
              drag
              dragElastic={0.18}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
              initial={{ x: -200 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
              class="col FirstBox "
            >
              <Box
                className="box"
                sx={{
                  width: 350,
                  height: 500,
                  borderRadius: 5,
                }}
              >
                <Slider ref={slider} {...settings}>
                  {data.map((item) => (
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        py: 1,
                      }}
                    >
                      
                      <Card
                        className="mycards"
                          orientation="horizontal"
                          key={item.title}
                          variant="outlined"
                          sx={{
                            gap: 2,
                            "--Card-padding": (theme) => theme.spacing(2),
                          }}
                        >
                          <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
                            <img
                              src={`${item.src}?h=120&fit=crop&auto=format`}
                              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                              alt={item.title}
                            />
                          </AspectRatio>
                          <Box sx={{ whiteSpace: "nowrap" }}>
                            <Typography fontWeight="md">
                              {item.title}
                            </Typography>
                            <Typography level="body2">
                              {item.description}
                            </Typography>
                          </Box>
                        </Card>
              
                    </Box>
                  ))}
                </Slider>
              </Box>
            </motion.div>
            <motion.div
              initial={{ x: 200 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
              class="col secondDiscover"
            >
              <h1 id="discover">Discover The Ideal Property Here</h1>
              <p id="as-soon-as">
                <Typical
                  loop={Infinity}
                  wrapper="p"
                  steps={[
                    "As soon as ",
                    1000,
                    "I had found a few properties that suited me, I was able to forget about how difficult it was to find a suitable home",
                    1000,
                  ]}
                />
              </p>
              <div class="card location-home">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-4 col-sm-12 mylocationhome">
                      <center>
                        <img src={location} alt="location" />
                        <select id="selectors">
                          <option value="volvo">location</option>
                        </select>
                        <br></br>
                        <label
                          style={{ marginLeft: "48px", fontWeight: "bolder" }}
                        >
                          Yogyakarta
                        </label>
                      </center>
                    </div>
                    <div class="col-lg-5 col-sm-12 secondbox">
                      <img
                        src={home}
                        alt="location"
                        style={{ marginLeft: "25px" }}
                      />
                      <select id="selectors2">
                        <option value="volvo">Type</option>
                      </select>
                      <br></br>
                      <label
                        style={{ marginLeft: "70px", fontWeight: "bolder" }}
                      >
                        Industrial Home
                      </label>
                    </div>
                    <div className="col-3 mysearch">
                      <button id="search">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
            className="counters"
          >
            <div className="col">
              <span id="numbers">
                <CountUp start={0} end={280} duration={2} delay={0.5} />
                <span style={{ color: "blue" }}>+</span>
              </span>
              <br></br>
              <span id="achievements">Goggle Review</span>
            </div>
            <div className="col col-lg-4">
              <span id="numbers">
                <CountUp start={0} end={15} duration={2} delay={0.5} />
                <span style={{ color: "blue" }}>+</span>
              </span>
              <br></br>
              <span id="achievements">Years Experience</span>
            </div>
            <div className="col col-lg-4">
              <span id="numbers">
                <CountUp start={0} end={49} duration={2} delay={0.5} />
                <span style={{ color: "blue" }}>+</span>
              </span>
              <br></br>
              <span id="achievements">Award Winning</span>
            </div>
          </motion.div>
        </div>

        {/* body ends*/}
      </div>
    </>
  );
}

export default Page1;
