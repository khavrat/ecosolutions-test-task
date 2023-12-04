import ReactDOM from "react-dom";
import { useEffect } from "react";
import { ButtonClose } from "./buttonClose/ButtonClose";
import { NetLink } from "../reusableComponents/netLinkSet/NetLinkSet";
import { ContentList } from "./contentList/ContentList";
import { Backdrop, Content, Wrap } from "./Menu.styled";

const menuRoot = document.getElementById("menu-root");

export const Menu = ({ isOpen, onClose }) => {
  useEffect(() => {
    console.log("isOpen :>> ", isOpen);
    const body = document.querySelector("body");
    if (isOpen === true) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <Backdrop
          onClick={handleBackdropClick}
          className={isOpen ? "is-open" : ""}
        >
          <Content className={isOpen ? "is-open" : ""}>
            <ButtonClose onClose={onClose} />
            <ContentList onClose={onClose} />
            <Wrap>
              <NetLink />
            </Wrap>
          </Content>
        </Backdrop>
      )}
    </>,
    menuRoot
  );
};
