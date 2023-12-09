import { useState } from "react";
import { faqList } from "../../data/faqList";
import { Button, Pocket, Text } from "./FaqList.styled";
import add from "../../images/icons/add.svg";
import minus from "../../images/icons/minus.svg";

export const FaqList = () => {
  const [fagIsOpen, setFagIsOpen] = useState(faqList[0].id);

  const handleClickFagEl = (id) => {
    setFagIsOpen(id === fagIsOpen ? null : id);
  };

  return (
    <ul>
      {faqList.map((fagEl) => {
        return (
          <li key={fagEl.id}>
            <Button
              type="button"
              aria-label="unfold or fold the answer to the question"
              onClick={() => handleClickFagEl(fagEl.id)}
            >
              {fagEl.id === fagIsOpen ? (
                <img src={minus} alt="close" />
              ) : (
                <img src={add} alt="open" />
              )}
              {fagEl.q}
            </Button>
            <Pocket
              id={fagEl.id}
              className={fagEl.id === fagIsOpen ? "fag-open" : ""}
              isOpen={fagEl.id === fagIsOpen}
            >
              <Text>{fagEl.a}</Text>
            </Pocket>
          </li>
        );
      })}
    </ul>
  );
};
