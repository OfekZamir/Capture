import styled from "styled-components";
import { motion } from "framer-motion";

//Styled Components
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  z-index: 2;
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  z-index: 2;
  @media (max-width: 1300px) {
    padding-right: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  z-index: 2;
  overflow: hidden;
`;

export const Hide = styled.div`
  overflow: hidden;
`;
