import {
  StyledOverlay,
  StyledModalWrapper,
  StyledModal,
  StyledChildren,
} from "./Modal.style";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = (props) => {
  console.log(props.value);

  return ReactDOM.createPortal(
    <>
      <StyledOverlay value={props.value}></StyledOverlay>
      <StyledModalWrapper>
        <StyledModal>
          <StyledChildren>{props.children}</StyledChildren>
        </StyledModal>
      </StyledModalWrapper>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;

Modal.propTypes = {
  value: PropTypes.number,
  children: PropTypes.node,
};
