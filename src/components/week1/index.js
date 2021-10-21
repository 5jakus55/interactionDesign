import React from "react";
import leftTopTriangle from "./assets/left-top-triangle.png";
import logo from "./assets/logo.png";
import welcomeBack from "./assets/welcome-back.png";
import Saira from "./assets/Saira.png";
import loading from "./assets/loading.gif";
import rightBottomTriangle from "./assets/right-bottom-triangle.png";
import styled from "styled-components";

const OuterWrapper = styled.div`
   background: #FFFFFF;
   width: 200 vw;
   height: 200 vh;
`;

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 60px;
    left:45%;
`;

const StyledWelcomeBack = styled.div`
    justify-content: center;
    position: absolute;
    top: 260px;
    left:41%;
`;

const StyledLoading = styled.div`
justify-content: center;
position: absolute;
top: 320px;
left:30%;
`;

const StyledSaira = styled.div`
justify-content: center;
position: absolute;
top: 310px;
left:46%;
`;

const StyledBotomTriangle = styled.div`
    position: absolute;
    bottom: 0px;
    right: 0px;
`;

const Week1 = () => (

    <OuterWrapper>


                < img src={leftTopTriangle} />


        <StyledLogo>
            <div>
               <img src={logo} /> 
            </div>
        </StyledLogo>

        <StyledWelcomeBack>
            <div>
            <img src={welcomeBack} />
            </div>
        </StyledWelcomeBack>
        
        <StyledLoading>
            <div>
            <img src={loading} alt="loading..." />
            </div>
        </StyledLoading>

        <StyledSaira>
            <div>
            <img src={Saira} />
            </div>
        </StyledSaira>

        <StyledBotomTriangle>
            <div>
            <img src={rightBottomTriangle} />
            </div>
        </StyledBotomTriangle>          
            
    </OuterWrapper>
)

export default Week1;