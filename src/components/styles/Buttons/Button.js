import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: ${(props) =>
    props.variant === "outline" ? "2px solid #4caf50" : "none"};
  padding: 15px 20px;
  border-radius: 10px;
  width: 150px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.5s all ease-out;
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#fff")};
  &:hover {
    background-color: ${(props) =>
      props.variant === "outline" ? "#c6edc8" : "#39973c"};
  }
`;
