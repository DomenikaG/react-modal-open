import { useState, useEffect } from "react";
import Button from "../components/atoms/Button/Button";
import Modal from "../components/organisms/Modal/Modal";
import { StyledHomePage } from "./HomePage.style";

const HomePage = () => {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [keyValue, setKeyValue] = useState(2);

  // Side effects
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      setKeyValue(+e.key === 1 || +e.key === 0 ? +e.key : 2);
    });
  }, []);

  // Functions
  const openModal = () => setIsOpen(true);

  const closeModal = (e) => {
    if (e.target.dataset.id === "closeButton") setIsOpen(false);
    if (e.target.id === "closeButton") setIsOpen(false);
  };

  return (
    <>
      <StyledHomePage>
        <Button text="Open Modal" action={openModal} primary="primary" />
      </StyledHomePage>
      {isOpen && (
        <Modal value={keyValue} closeModal={closeModal}>
          <div className="header">
            <h2>Modal title</h2>
            <i
              className="fa-solid fa-xmark"
              data-id="closeButton"
              onClick={closeModal}
            ></i>
          </div>

          <p>Modal body goes here</p>

          <div className="buttonsWrapper" onClick={closeModal}>
            <Button text="Close" secondary="secondary" id="closeButton" />
            <Button text="Save changes" primary="primary" />
          </div>
        </Modal>
      )}
    </>
  );
};

export default HomePage;
