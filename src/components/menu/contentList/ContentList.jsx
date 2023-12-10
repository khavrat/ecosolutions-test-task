import texts from "../../../data/texts.json";
import { MenuLink } from "../menuLink/MenuLink";
import { List } from "./ContentList.styled";

export const ContentList = ({ onClose }) => {
  return (
    <List>
      <li>
        <MenuLink href="#main" onClose={onClose}>
          {texts.menu.links.link1}
        </MenuLink>
      </li>
      <li>
        <MenuLink href="#about" onClose={onClose}>
          {texts.menu.links.link2}
        </MenuLink>
      </li>
      <li>
        <MenuLink href="#cases" onClose={onClose}>
          {texts.menu.links.link3}
        </MenuLink>
      </li>
      <li>
        <MenuLink href="#faq" onClose={onClose}>
          {texts.menu.links.link4}
        </MenuLink>
      </li>
      <li>
        <MenuLink href="#contactUs" onClose={onClose}>
          {texts.menu.links.link5}
        </MenuLink>
      </li>
    </List>
  );
};
