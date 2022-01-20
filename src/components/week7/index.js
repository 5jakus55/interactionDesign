import React, { useState, useEffect, useRef } from "react";
import banks from "./assets/banks.png";
import logo from "./assets/logo-beats.png";
import blurryM from "./assets/blurry-background-m.png";
import blurryS from "./assets/blurry-background-s.png";
import loader from "./assets/loader1.gif";
import title from "./assets/title.png";
import signup from "./assets/signup-button.png";
import styled from "styled-components";

const OuterWrapper = styled.div`
  background: #ffffff;
  width: 200 vw;
  height: 200 vh;
  display: flex;
  justify-content: center;
`;

const StyledLogo = styled.div`
  text-align: center;
  position: absolute;
  top: 50px;
  left: 685px;
`;

const StyledTitle = styled.div`
  justify-content: center;
  position: absolute;
  top: 150px;
  left: 622px;
`;

const StyledBanks = styled.div`
  justify-content: center;
  position: absolute;
  top: 340px;
  left: 540px;
`;

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35vh;
`;

const StyledSignup = styled.div`
  justify-content: center;
  position: absolute;
  top: 720px;
  left: 720px;
`;
const StyledBlurryS = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

const StyledBlurryM = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const StyledButton = styled.button`
  height: 45px;
  width: 150px;
  justify-content: center;
  position: absolute;
  top: 630px;
  left: 680px;
  background: #415a77;
  color: #fff;
  text-align: center;
  font-size: 20px;
  border: 2px solid #415a77;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0d1b2a;
    border: 2px solid #0d1b2a;
  }
`;

const Week7 = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const timeout = React.useRef();

  React.useEffect(() => {
    setIsLoading(true);
    timeout.current = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(timeout.current);
    }, 3000);
    return () => {
      setIsLoading(false);
      clearTimeout(timeout.current);
    };
  }, []);

  if (isLoading) {
    return (
      <StyledLoader>
        <img src={loader} />
      </StyledLoader>
    );
  }
  return (
    <OuterWrapper>
      <StyledBlurryS>
        <div>
          <img src={blurryS} />
        </div>
      </StyledBlurryS>

      <StyledBlurryM>
        <div>
          <img src={blurryM} />
        </div>
      </StyledBlurryM>

      <StyledLogo>
        <div>
          <img src={logo} />
        </div>
      </StyledLogo>

      <StyledTitle>
        <div>
          <img src={title} />
        </div>
      </StyledTitle>

      <StyledBanks>
        <div>
          <img src={banks} />
        </div>
      </StyledBanks>

      <StyledButton> Log In </StyledButton>

      <StyledSignup>
        <div>
          <img src={signup} />
        </div>
      </StyledSignup>
    </OuterWrapper>
  );
};

export default Week7;
