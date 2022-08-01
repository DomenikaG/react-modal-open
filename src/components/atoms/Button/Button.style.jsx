import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 10px 15px;

  background-color: ${(props) => (props.primary ? "#0a6efd" : "#6C757D")};

  font-size: 18px;
  color: #fff;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
