import React from "react";
import styled from "styled-components";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  fadeOut,
  Img,
  lineAnim,
} from "../animation";
import useScroll from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame0 variants={fadeOut}></Frame0>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.div
              style={{
                width: "100%",
                height: "100%",
              }}
              whileHover={{
                scale: 1.05,
                opacity: 0.9,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
            >
              <motion.img
                variants={Img}
                src={athlete}
                draggable="false"
                alt="athlete"
              ></motion.img>
            </motion.div>
          </Hide>
        </Link>
      </Movie>
      <Movie variants={fade}>
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <motion.div>
          <motion.div
            style={{
              width: "100%",
              height: "100%",
            }}
            whileHover={{
              scale: 1.05,
              opacity: 0.9,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <Link to="/work/the-racer">
              <img src={theracer} draggable="false" alt="theracer"></img>
            </Link>
          </motion.div>
        </motion.div>
      </Movie>
      <Movie
        variants={fade}
        animate={controls2}
        initial="hidden"
        ref={element2}
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>{" "}
        <motion.div
          style={{
            width: "100%",
            height: "100%",
          }}
          whileHover={{
            scale: 1.05,
            opacity: 0.9,
            transition: { duration: 0.2, ease: "easeIn" },
          }}
        >
          <Link to="/work/good-times">
            <img src={goodtimes} draggable="false" alt="goodtimes"></img>
          </Link>
        </motion.div>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    font-weight: 500;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
  }
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    padding: 3rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame0 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100%;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
