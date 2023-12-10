import texts from "../../../data/texts.json";
import { Address } from "./AddressEl.styled";

export const AddressEl = () => {
  return <Address>{texts.contactBlock.address}</Address>;
};
