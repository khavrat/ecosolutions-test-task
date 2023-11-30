import { Content } from "./Container.styled";

export const Container = ({ children }) => {
  window.scrollBy({
    top: -2000,
    behavior: "smooth",
  });
  return <Content>{children}</Content>;
};
