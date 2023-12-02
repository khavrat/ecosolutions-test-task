import {Container} from "../container/Container"
import { Section, Title, Line, Text, Span } from "./Electricity.styled";

export const Electricity = () => {
  return (
    <Section>
      <Container>
        <Title>Electricity we produced for all time</Title>
        <Line></Line>
        <Text>
          <Span>1.134.147.814</Span>kWh
        </Text>
      </Container>
    </Section>
  );
};
