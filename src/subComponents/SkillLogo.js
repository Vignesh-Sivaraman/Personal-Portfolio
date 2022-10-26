import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Main = styled.div`
  text-align: center;
`;

function SkillLogo(props) {
  return (
    <Main className="col-6 col-lg-3 my-2">
      <Icon icon={props.source} width="75" height="75" color={props.color} />
    </Main>
  );
}

export default SkillLogo;
