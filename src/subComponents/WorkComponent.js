import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "../components/Themes";

const Box = styled(motion.div)`
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  text-decoration: none;
  width: calc(22rem + 15vw);
  min-height: 725px;
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

const SiteButton = styled.a`
  border: none;
  color: #333a56;
  font-weight: bold;
  border-radius: 20px;
  width: 100px;
  font-size: 1.25em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #f7f5e6 !important ;
  text-decoration: none;
  &:hover {
    color: #f7f5e6;
    background-color: #333a56 !important;
    border: 1px solid #f7f5e6 !important;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    width: 75px;
    height: 30px;
  }
`;

const SiteButtonContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
`;

const WorkComponent = (props) => {
  const {
    name,
    tags,
    date,
    imgSrc,
    link,
    features,
    mobile,
    frontend,
    backend,
  } = props.blog;
  return (
    <Container variants={item}>
      <Box>
        <Image img={imgSrc} mobile={mobile}></Image>
        <SiteButtonContainer>
          <SiteButton href={link} target="_blank" rel="noreferrer">
            Go to Site
          </SiteButton>
          <SiteButton href={frontend} target="_blank" rel="noreferrer">
            FrontEnd
          </SiteButton>{" "}
          <SiteButton href={backend} target="_blank" rel="noreferrer">
            Backend
          </SiteButton>
        </SiteButtonContainer>
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
