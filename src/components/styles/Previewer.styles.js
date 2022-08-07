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

export const SectionItem = styled.div`
  margin: 10px;
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
    font-weight: 600;
    margin: 20px auto;
    margin-top: 80px;
    width: 90%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 5px solid #c1f2f7;
    /* background-color: #00bfd1; */
  }
  .resume-data {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    .section-info {
      color: #3d3d3d;
    }
    h4 {
      width: fit-content;
      background-image: linear-gradient(180deg, white 70%, #c1f2f7 30%);
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
