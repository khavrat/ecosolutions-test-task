import { List } from "./ContentList.styled";
import { MenuLink } from "../menuLink/MenuLink"

export const ContentList = ({ onClose }) => {
  return (
    <List>
      <li>
        <MenuLink href="#main" onClose={onClose}>
          Main
        </MenuLink>
      </li>
      <li>
        <MenuLink href="#about" onClose={onClose}>
          About
        </MenuLink>
      </li>
      <li>
        <MenuLink href="#cases" onClose={onClose}>
          Cases
        </MenuLink>
      </li>
      <li>
        <MenuLink href="#faq" onClose={onClose}>
          FAG
        </MenuLink>
      </li>
      <li>
        <MenuLink href="#contactUs" onClose={onClose}>
          Contact Us
        </MenuLink>
      </li>
    </List>
  );
};
