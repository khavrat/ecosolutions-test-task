import { useState } from "react";
import { questtionList } from "../../data/questionList";
import { Button, Pocket, Text } from "./FaqList.styled";
import add from "../../images/icons/add.svg";
import minus from "../../images/icons/minus.svg";

export const FagList = () => {
  const [fagIsOpen, setFagIsOpen] = useState(questtionList[0].id);

  const handleClickFagEl = (id) => {
    setFagIsOpen(id === fagIsOpen ? null : id);
  };

  return (
    <ul>
      {questtionList.map((fagEl) => {
        return (
          <li key={fagEl.id}>
            <Button onClick={() => handleClickFagEl(fagEl.id)}>
              {fagEl.id === fagIsOpen ? (
                <img src={minus} alt="open" />
              ) : (
                <img src={add} alt="open" />
              )}
              {fagEl.q}
            </Button>
            <Pocket
              id={fagEl.id}
              className={fagEl.id === fagIsOpen ? "fag-open" : ""}
              isOpen={fagEl.id===fagIsOpen}
            >
              <Text>{fagEl.a}</Text>
            </Pocket>
          </li>
        );
      })}
    </ul>
  );
};
