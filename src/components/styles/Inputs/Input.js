import styled, { css } from "styled-components";

const inputStyle = css`
  border: none;
  margin: 10px auto;
  width: 400px;
  padding: 10px;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  background-color: #e3e3e3;
  border-radius: 5px;
  &:focus {
    outline: 2px solid #4caf50;
  }
`;

export const StyledInputText = styled.input`
  ${inputStyle}
  height: 40px;
`;

export const StyledInputTextArea = styled.textarea`
  ${inputStyle}
  height: 100px;
  resize: none;
`;
