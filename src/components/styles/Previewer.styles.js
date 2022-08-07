import styled from "styled-components";

export const StyledPreview = styled.div`
  display: flex;
  width: 90%;
  min-width: fit-content;
  margin: 0 auto;
  flex-direction: column;
  gap: 20px;
  padding: 5px;
  justify-content: center;
`;

export const ResumeSection = styled.div`
  border: 1px solid black;
  width: fit-content;
  margin: 0 auto;
`;

export const ResumePage = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  width: 1020px;
  min-height: 1280px;
  font-size: 1.2rem;
  .name {
    height: 5%;
    font-size: 3rem;
    margin: 20px auto;
  }
  .resume-data {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    .section-info {
      color: #3d3d3d;
    }
  }
  .skills-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const LeftSection = styled.div`
  width: 45%;
  padding: 5%;
  word-wrap: break-word;
`;

export const RightSection = styled.div`
  width: 45%;
  padding: 5%;
`;
