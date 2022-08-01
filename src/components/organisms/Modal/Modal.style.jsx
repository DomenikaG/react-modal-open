import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: ${(props) =>
    props.value === 0
      ? "rgba(0, 0, 0, 0.3)"
      : props.value === 1
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(0, 0, 0, 0.05)"};
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  width: 500px;
  /* padding: 0 15px; */
  border: 0.5px solid #ddd;
  border-radius: 4px;

  background-color: #fff;
`;

export const StyledChildren = styled.div`
  div.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    padding: 15px;
    margin: 0;
  }

  p {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 15px 15px 30px 15px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  div.buttonsWrapper {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 15px;
  }

  i {
    padding: 15px;
    margin: 0;
    font-size: 25px;
    color: #6c757d;

    &:hover {
      cursor: pointer;
    }
  }
`;
