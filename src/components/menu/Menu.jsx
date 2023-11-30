import { useEffect } from "react";
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
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.284 4.492h5.723v5.723M3.994 12.506l7.933-7.934"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MenuLink>
              <MenuLink href="#">
                About
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.284 4.492h5.723v5.723M3.994 12.506l7.933-7.934"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MenuLink>
              <MenuLink href="#">
                Cases
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.284 4.492h5.723v5.723M3.994 12.506l7.933-7.934"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MenuLink>
              <MenuLink href="#">
                FAG
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.284 4.492h5.723v5.723M3.994 12.506l7.933-7.934"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MenuLink>
              <MenuLink href="#">
                Contact Us
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.284 4.492h5.723v5.723M3.994 12.506l7.933-7.934"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
