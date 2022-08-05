import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./styles/Buttons/Button";
import { HomeDiv, HomeContent, HomeGraphic, Intro } from "./styles/Home.styles";
import { MdArrowForward } from "react-icons/md";

function Home() {
  const navigate = useNavigate();
  return (
    <HomeDiv>
      <HomeContent>
        <Intro>
          <div>
            <h1>Hi there !</h1>
            <p>
              Create your <span>resume</span> now !
            </p>
            <StyledButton onClick={() => navigate("/edit")}>
              <div>Create now</div>
              <MdArrowForward />
            </StyledButton>
          </div>
        </Intro>
        <HomeGraphic>
          <div>
            <div>What are you waiting for ?</div>
            <div className="offer-tag">Hurry up 'till the offer🎉 exists !</div>
          </div>
        </HomeGraphic>
      </HomeContent>
    </HomeDiv>
  );
}

export default Home;
