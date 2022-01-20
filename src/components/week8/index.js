import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import daySwitch from "./assets/icon-switch-1.svg";
import nightSwitch from "./assets/icon-switch-2.svg";

const time = "0.5s";
const blackBackground = "#000000";
const setAnimation = (from, to) => keyframes({ from: from, to: to });

const StyledWrapper = styled.div`
  animation: ${time}
    ${({ showBackground }) =>
      showBackground &&
      setAnimation({ background: "white" }, { background: blackBackground })}
    linear;
  animation-fill-mode: forwards;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.div`
  border-radius: 15px;
  border: 1px solid ${({ active }) => (active ? "#E5E5E5" : "#00B6A0")};
  height: 20px;
  width: 36px;
  transition: background-color: 0.2s;
  background-color: ${({ active }) => (active ? "#A1A1A1" : "#9AE9DF")};
`;

const StyledSwitch = styled.div`
  border-radius: 10px;
  animation: ${time}
    ${({ active }) =>
      active
        ? setAnimation({ marginLeft: "1px" }, { marginLeft: "17px" })
        : setAnimation({ marginLeft: "17px" }, { marginLeft: "1px" })}
    linear;
  animation-fill-mode: forwards;
  height: 18px;
  width: 18px;
  margin: 1px;
`;

const Toggle = (props) => {
  const [active, setActive] = useState(false);
  const { onActive, onNotActive } = props;

  useEffect(() => {
    if (!active) {
      onNotActive();
      return;
    }

    onActive();
  }, [active]);

  const handleClick = () => setActive(!active);

  return (
    <StyledButton active={active}>
      {" "}
      <StyledSwitch active={active} onClick={handleClick}>
        {active ? (
          <img alt="nightSwitch" src={nightSwitch} />
        ) : (
          <img alt="daySwitch" src={daySwitch} />
        )}
      </StyledSwitch>
    </StyledButton>
  );
};

const Week8 = () => {
  const [showBackground, setShowBackground] = useState(false);
  const handleNotActive = () => setShowBackground(false);
  const handleActive = () => setShowBackground(true);

  return (
    <StyledWrapper showBackground={showBackground}>
      <Toggle onNotActive={handleNotActive} onActive={handleActive} />
    </StyledWrapper>
  );
};

export default Week8;
