import React from "react";
import styled from "styled-components";

const Main = styled.div`
  text-align: center;
`;

function SkillLogo(props) {
  return (
    <Main className="col-6 col-lg-3 my-2">
      <img src={props.source} alt="" width="80px" height="80px" />
    </Main>
  );
}

export default SkillLogo;
