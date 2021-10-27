import React, { useState } from "react";
import styled from "styled-components";
import logo from "./assets/logo-luna.png";
import rock from "./assets/rock.png";
import login from "./assets/login.png";
import show from "./assets/show.svg";
import hide from "./assets/hide.svg";
import tickButton from "./assets/tick-button.png";
import tickButton2 from "./assets/tick-button-2.png";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Not a valid email"),
  password: yup.string().required("Password is required"),
});

const StyledWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
`;

const StyledLogo = styled.div`
position: absolute;
top: 20px;
left: 20px;
`;

const StyledMenu = styled.ul`
list-style-type: none;
float: left;
display: block;
text-decoration: none;
font-family: Lato;
font-size: 24px;
color: #0D1B2A;
`;

const StyledLogin = styled.div`
display: flex;
text-align: center;
justify-content: center;
`;

const StyledRock = styled.div`
position:absolute;
bottom: 0%;
right;
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #0D1B2A;
  height: 45px;
  width: 390px;
  border-radius: 4px;
  padding-left: 10px;
  font-size: 18px;
  font-family: Lato;
  color: #0D1B2A;
`;

const StyledIcon = styled.img`
  width: 26px;
  height: 24px;
  margin-left: -80px;
  margin-bottom: -10px;
`;

const StyledErrorText = styled.p`
  color: #F1A208;
`;

const StyledButton = styled.button`
  height: 63px;
  width: 225px;
  background: #415A77;
  color: #ffff;
  text-align: center;
  font-size: 24px;
  border: 2px solid #415A77;
  cursor: pointer;
  &:hover {
    background: #FFFFFF;
  }
`;

const Week4 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setSubmitted(true);
    console.log(data);
  }

  const handleClick = (e) => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledWrapper>
        <StyledLogo>
           <img src={logo} />
        </StyledLogo>
      <StyledMenu>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      </StyledMenu>
      <StyledLogin> 
      <img src={login} />
      </StyledLogin>
      <StyledRock> <img src={rock} /></StyledRock>

      {submitted && <h1> You're all done</h1>}
      {!submitted && (
      
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>)}
    </StyledWrapper>
  );
};

export default Week4;