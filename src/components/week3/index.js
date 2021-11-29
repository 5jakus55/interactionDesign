import React from "react";
import topCircles from "./assets/top-circles.png";
import mainImage from "./assets/main-image.png";
import welcome from "./assets/welcome.png";
import createAccount from "./assets/create-account.png";
import bottomCircle from "./assets/bottom-circle.png";
import styled from "styled-components";

const OuterWrapper = styled.div`
  background: #fafafa;
  width: 200 vw;
  height: 200 vh;
`;

const StyledTopCircles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 80px;
`;

const StyledWelcome = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StyledCreate = styled.div`
  position: absolute;
  top: 700px;
  right: 706px;
`;

const StyledButtons = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 50px;
`;

const StyledButton = styled.button`
  color: #4345e8;
  background-color: ${(props) => props.color};
  border: 3px solid #4345e8;
  font-size: 1.5rem;
  font-color: #fff;
  box-sizing: border-box;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 2%;
`;

export const Button = (props) => {
  const { children, color, disabled, hoverColor, ...other } = props;
  return (
    <StyledButton
      color={disabled ? "grey" : color}
      disabled={disabled}
      {...other}
    >
      {" "}
      {children}{" "}
    </StyledButton>
  );
};

const Week3 = () => {
  const handleMouseOver = (e) => {
    debugger;
    console.log("mouse is over me");
  };
  return (
    <OuterWrapper>
      <StyledTopCircles>
        <div>
          <img src={topCircles} />
        </div>
      </StyledTopCircles>

      <StyledWrapper>
        <div>
          <img src={mainImage} />
        </div>
      </StyledWrapper>

      <StyledWelcome>
        <div>
          <img src={welcome} />
        </div>
      </StyledWelcome>

      <StyledButtons>
        <Button onMouseOver={handleMouseOver} color="#fff">
          {" "}
          LOG IN{" "}
        </Button>

        <Button onMouseOver={handleMouseOver} color="#fff">
          {" "}
          SIGN UP{" "}
        </Button>
      </StyledButtons>

      <StyledCreate>
        <div>
          <img src={createAccount} />
        </div>
      </StyledCreate>

      <img src={bottomCircle} />
    </OuterWrapper>
  );
};

export default Week3;
