import { useState, useEffect } from "react";
import texts from "../../data/texts.json";
import { Container } from "../reusableComponents/container/Container";
import { Section, Title, Line, Text, Span } from "./Electricity.styled";

export const Electricity = () => {
  const [currentCount, setCurrentCount] = useState(1134147814);
  const [formattedCount, setFormattedCount] = useState(1134147814);
  const to = 9999999999;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCount((prev) => prev + 1);
    }, 1000);

    if (currentCount === to) {
      clearInterval(intervalId);
    }

    const formattedCount = currentCount
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setFormattedCount(formattedCount);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentCount, to]);

  return (
    <Section>
      <Container>
        <Title>{texts.electricity.title}</Title>
        <Line></Line>
        <Text>
          <Span>{formattedCount}</Span>
          {texts.electricity.text}
        </Text>
      </Container>
    </Section>
  );
};
