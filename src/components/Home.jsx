import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./styles/Buttons/Button";
import { HomeDiv, HomeContent, HomeGraphic, Intro } from "./styles/Home.styles";
import resumeImage from "../assets/resume.png";

function Home() {
  const navigate = useNavigate();
  return (
    <HomeDiv>
      <HomeContent>
        <Intro>
          <h1>Hi there !</h1>
          <p>
            Create your <span>resume</span> now !
          </p>
          <StyledButton onClick={() => navigate("/edit")}>
            Create now
          </StyledButton>
        </Intro>
        <HomeGraphic>
          <img src={resumeImage} alt="resume"></img>
        </HomeGraphic>
      </HomeContent>
    </HomeDiv>
  );
}

export default Home;
