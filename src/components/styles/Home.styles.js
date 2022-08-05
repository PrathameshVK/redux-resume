import styled from "styled-components";

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  width: 75vw;
  margin: auto;
`;

export const Intro = styled.div`
  width: 400px;
  margin: auto;
  h1 {
    font-size: 3.5rem;
    font-weight: 500;
  }
  p {
    font-size: 2.5rem;
    span {
      color: #4caf50;
    }
  }
`;

export const HomeGraphic = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  margin: auto;
  img {
    width: 90%;
    height: auto;
  }
`;
