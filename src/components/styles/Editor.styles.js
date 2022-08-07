import styled from "styled-components";

export const StyledEditor = styled.div`
  display: flex;
  width: 90%;
  min-width: fit-content;
  margin: 0 auto;
  flex-direction: column;
  gap: 20px;
  padding: 5px;
  justify-content: center;
`;

export const StyledSection = styled.div`
  width: 90%;
  min-width: fit-content;
  margin: 0 auto;
  min-height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-between;
  p {
    color: #8e8e8e;
  }
`;

export const StyledSkillsList = styled.div`
  padding: 2%;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  .skill-tag {
    display: flex;
    gap: 5px;
    align-items: center;
    max-width: 400px;
    padding: 5px 8px;
    border: 1px solid #4caf50;
    border-radius: 5px;
    color: #4caf50;
    .skill-name {
      max-width: 95%;
      word-wrap: break-word;
      word-break: break-all;
    }
  }
`;

export const StyledItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const ItemCard = styled.div`
  .header {
    display: flex;
    flex-direction: row;
    width: 100%;
    word-wrap: break-word;
    justify-content: space-between;
  }
  max-width: 400px;
  padding: 10px;
  border: 1px solid #4caf50;
  border-radius: 5px;
  word-wrap: break-word;
  .header-name {
    color: #4caf50;
    font-size: 1rem;
    font-weight: bold;
    max-width: 95%;
    word-wrap: break-word;
    word-break: break-all;
  }
  .item-details {
    color: #747474;
  }
`;
