import React from "react";
import topCircles from "./assets/top-circles.png";
import mainImage from "./assets/main-image.png";
import welcome from "./assets/welcome.png";
import login from "./assets/login.png";
import signup from "./assets/signup.png";
import createAccount from "./assets/create-account.png";
import bottomCircle from "./assets/bottom-circle.png";
import styled from "styled-components";

const OuterWrapper = styled.div`
   background: #FAFAFA;
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

const StyledLogin = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 50px;
`;

const StyledSignup = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 15px;
`;

const StyledCreate = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;

const Week1 = () => (

    <OuterWrapper>

        <StyledTopCircles>
            <div>
                < img src={topCircles} />
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

        <StyledLogin>
            <div>
            <img src={login} />
            </div>
        </StyledLogin>

        <StyledSignup>
            <div>
            <img src={signup} />
            </div>
        </StyledSignup>

        <StyledCreate>
            <div>
            <img src={createAccount} />
            </div>
        </StyledCreate>          
            
        <img src={bottomCircle} />
    </OuterWrapper>
)

export default Week1;