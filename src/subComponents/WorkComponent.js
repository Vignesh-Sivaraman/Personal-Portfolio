import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "../components/Themes";

const Box = styled(motion.a)`
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  text-decoration: none;
  width: calc(22rem + 15vw);
  min-height: 625px;
  border: 2px solid ${(props) => props.theme.body};
  padding: 1rem;
  color: ${(props) => props.theme.body};

  display: flex;
  flex-direction: column;
  z-index: 5;

  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};

    transition: all 0.3s ease;
  }

  ${mediaQueries(50)`
    width:calc(60vw);

  `};
  ${mediaQueries(30)`
    
    height:auto;

  `};

  ${mediaQueries(25)`
    
    height:auto;
    padding:0.8rem;

  `};
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 350px;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: ${(props) => `url(${props.mobile})`};
    background-size: contain;
  }
  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  ${mediaQueries(40)`
    font-size:calc(0.8em + 1vw) !important;

  `};

  ${mediaQueries(25)`
    
    font-size:calc(0.6em + 1vw)  !important;



  `};

  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
  ${mediaQueries(25)`
    
    font-size:calc(0.5em + 1vw)  !important;



  `};
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Date = styled.span`
  padding: 0.5rem 0;
  ${mediaQueries(25)`
    
    font-size:calc(0.5em + 1vw)  !important;



  `};
`;

const Container = styled(motion.div)``;
const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
};

const WorkComponent = (props) => {
  const { name, tags, date, imgSrc, link, features, mobile } = props.blog;
  return (
    <Container variants={item}>
      <Box href={link} target="_blank" rel="noreferrer">
        <Image img={imgSrc} mobile={mobile}></Image>
        <Title>{name}</Title>
        <HashTags>{features}</HashTags>
        <HashTags>
          {tags.map((t, id) => (
            <Tag key={id}>#{t}</Tag>
          ))}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default WorkComponent;
