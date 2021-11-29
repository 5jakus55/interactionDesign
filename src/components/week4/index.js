import React, { useState } from "react";
import styled from "styled-components";
import logo from "./assets/logo-luna.png";
import rock from "./assets/rock.png";
import login from "./assets/login.png";
import show from "./assets/show.png";
import hide from "./assets/hide.png";
import menu from "./assets/menu.png";
import objects from "./assets/3d-objects.png";
import heading from "./assets/Heading.png";
import rightRectangle from "./assets/right-rectangle.png";
import underText from "./assets/under-text.png";
import tickButton from "./assets/tick-button.png";
import tickButton2 from "./assets/tick-button-2.png";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Not a valid email"),
  password: yup.string().required("Password is required"),
});

const StyledOuterWrapper = styled.div`
  background: #fbf8f8;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledLogo = styled.div`
  position: absolute;
  top: 5px;
  left: 20px;
`;

const StyledMenu = styled.ul`
  position: absolute;
  top: 25px;
  left: 150px;
`;

const StyledTitle = styled.div`
  position: absolute;
  top: 180px;
  left: 190px;
`;

const StyledText = styled.div`
  position: absolute;
  top: 430px;
  left: 190px;
`;

const StyledRectangle = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const StyledObjects = styled.div`
  position: absolute;
  top: 0px;
  right: 50px;
`;

const StyledLogin = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 150px;
  position: absolute;
  top: 20vh;
  left: 93vh;
`;

const StyledRock = styled.div`
  position: absolute;
  bottom: 0%;
  right: 0%;
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #0d1b2a;
  height: 45px;
  width: 390px;
  border-radius: 4px;
  padding-left: 10px;
  font-size: 18px;
  font-family: Lato;
  color: #0d1b2a;
`;

const StyledIcon = styled.img`
  width: 27px;
  height: 24px;
  margin-left: -50px;
  margin-bottom: -6px;
`;

const StyledErrorText = styled.p`
  color: #f1a208;
`;

const StyledButton = styled.button`
  height: 63px;
  width: 225px;
  justify-content: center;
  background: #415a77;
  color: #ffff;
  text-align: center;
  font-size: 24px;
  border: 2px solid #415a77;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 85px;
  margin-top: 50px;
  &:hover {
    background: #0d1b2a;
  }
`;

const StyledButton2 = styled.button`
  height: 63px;
  width: 225px;
  justify-content: center;
  margin-left: 190px;
  margin-top: 600px;
  background: #415a77;
  color: #ffff;
  text-align: center;
  font-size: 24px;
  border: 2px solid #415a77;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0d1b2a;
  }
`;

const StyledButton3 = styled.button`
  height: 63px;
  width: 225px;
  justify-content: center;
  margin-left: 100px;
  margin-top: 600px;
  background: #ffff;
  color: #415a77;
  text-align: center;
  font-size: 24px;
  border: 2px solid #415a77;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #e6fafc;
  }
`;

const Week4 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showMainPage, setMainPage] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setSubmitted(true);
    console.log(data);
  };

  const handleClick = (e) => {
    setShowPassword(!showPassword);
  };

  const handleFormClick = (e) => {
    setMainPage(!showMainPage);
    setShowLoginForm(!showLoginForm);
  };

  return (
    <StyledOuterWrapper>
      <StyledLogo>
        <img src={logo} />
      </StyledLogo>
      <StyledMenu>
        <img src={menu} />
      </StyledMenu>
      {showMainPage && !showLoginForm && (
        <form>
          <StyledTitle>
            <img src={heading} />
          </StyledTitle>

          <StyledText>
            <img src={underText} />
          </StyledText>

          <StyledRectangle>
            <img src={rightRectangle} />
          </StyledRectangle>

          <StyledObjects>
            <img src={objects} />
          </StyledObjects>

          <StyledButton2 onClick={handleFormClick}> LOG IN </StyledButton2>
          <StyledButton3> SIGN UP </StyledButton3>
        </form>
      )}
      ;
      <StyledWrapper>
        {submitted && <h1> You're all done</h1>}
        {!submitted && showLoginForm && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledLogin>
              <img src={login} />
            </StyledLogin>
            <p>
              <StyledInput
                type="text"
                name="email"
                placeholder="Email"
                ref={register()}
              />
            </p>
            <StyledErrorText> {errors.email?.message}</StyledErrorText>
            <p>
              {" "}
              <StyledRock>
                {" "}
                <img src={rock} />
              </StyledRock>{" "}
            </p>
            <p>
              <StyledInput
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                ref={register()}
              />
              <StyledIcon
                src={showPassword ? hide : show}
                onClick={handleClick}
              ></StyledIcon>
              <StyledErrorText> {errors.password?.message}</StyledErrorText>
            </p>
            <p>
              <StyledButton> Login </StyledButton>
            </p>
          </form>
        )}
      </StyledWrapper>
    </StyledOuterWrapper>
  );
};

export default Week4;
