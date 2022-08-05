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
  flex-wrap: wrap;
  justify-content: center;
  width: 75vw;
  margin: auto;
`;

export const Intro = styled.div`
  width: 550px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  h1 {
    font-size: 3.5rem;
    font-weight: 500;
  }
  p {
    font-size: 2.5rem;
    color: #606060;
    span {
      color: #4caf50;
    }
  }
`;

export const HomeGraphic = styled.div`
  width: 500px;
  height: 90vh;
  border-radius: 10px;
  color: white;
  background-color: #5ccd60;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  div {
    width: 90%;
    margin: auto;
    font-size: 3rem;
    text-align: center;
    word-wrap: break-word;
  }
  .offer-tag {
    font-size: 2.3rem;
  }
`;
