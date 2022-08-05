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
  border: 1px solid green;
  padding: 100px;
  font-size: 1.2rem;
  .name {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    margin: auto;
    margin-bottom: 50px;
  }
  .contacts {
    font-size: 1.3rem;
    color: gray;
  }
  .skills-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
