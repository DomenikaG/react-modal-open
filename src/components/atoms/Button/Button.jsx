import { StyledButton } from "./Button.style";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <StyledButton
      onClick={props.action}
      primary={props.primary}
      secondary={props.secondary}
      id={props.id}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  action: PropTypes.func,
  primary: PropTypes.string,
  secondary: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
};
