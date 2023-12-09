import ReactDOM from "react-dom";
import { useEffect } from "react";
import { NetLink } from "../reusableComponents/netLinkSet/NetLinkSet";
import { ButtonClose } from "./buttonClose/ButtonClose";
import { ContentList } from "./contentList/ContentList";
import { Backdrop, Content, Wrap } from "./Menu.styled";

const menuRoot = document.getElementById("menu-root");

export const Menu = ({ isOpen, onClose }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen === true) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleCloseByEsc = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        e.target.blur();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleCloseByEsc);
    }
    return () => {
      document.removeEventListener("keydown", handleCloseByEsc);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <Backdrop onClick={handleBackdropClick}>
          <Content>
            <ButtonClose type="button" onClose={onClose} />
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
