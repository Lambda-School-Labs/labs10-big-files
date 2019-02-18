import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const LeftMenuHolder = styled.div`
  width: 10%;
  height: 22rem;
  // border: 2px solid;
  margin-left: 2%;
  border-radius: 10%;
  display: flex;
  align-items: center;
  background-color: #3CDBD3;
`;
const LeftMenuOptions = styled.div`
  margin: 0 auto;
  line-height: 0.5;
`;
const LinkStyles = styled.h1`
  color: purple;
  font-size: 2rem;
`;

const LeftMenu = () => {
  return (
    <LeftMenuHolder>
      <LeftMenuOptions>
        <Link to="/add"><LinkStyles>Files</LinkStyles></Link>
        <br />
        <Link to="/billing"><LinkStyles>Billing</LinkStyles></Link>
        <br />
        <Link to="/settings"><LinkStyles>Settings</LinkStyles></Link>
      </LeftMenuOptions>
    </LeftMenuHolder>
  );

};

export default LeftMenu;
