import { useEffect } from "react";
import {ArrowSvg} from "../reusableComponents/arrowSvg"
import { NetLink } from "../reusableComponents/netLinkSet/NetLinkSet";
import {
  Backdrop,
  Content,
  CloseButton,
  MenuLinkWrapper,
  MenuLink,
  CustomClass,
} from "./Menu.styled";

export const Menu = ({ isOpen, onClose }) => {

  useEffect(() => {
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

  return (
    <>
      {isOpen && (
        <Backdrop onClick={handleBackdropClick}>
          <Content>
            <CloseButton onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M5.83331 5.83325L14.1666 14.1666M5.83331 14.1666L14.1666 5.83325"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              close
            </CloseButton>
            <MenuLinkWrapper>
              <MenuLink href="#">
                Main
                <ArrowSvg />
              </MenuLink>
              <MenuLink href="#">
                About
                <ArrowSvg />
              </MenuLink>
              <MenuLink href="#">
                Cases
                <ArrowSvg />
              </MenuLink>
              <MenuLink href="#">
                FAG
                <ArrowSvg />
              </MenuLink>
              <MenuLink href="#">
                Contact Us
                <ArrowSvg />
              </MenuLink>
            </MenuLinkWrapper>
            <CustomClass>
              <NetLink />
            </CustomClass>
          </Content>
        </Backdrop>
      )}
    </>
  );
};
