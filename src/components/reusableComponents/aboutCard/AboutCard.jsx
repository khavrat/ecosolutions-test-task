import { Card, Wrapper, Image,  Title, Text } from "./AboutCard.styled";

export const AboutCard = ({ label, title, text }) => {
  return (
    <Card>
      <Wrapper>
        <Image src={label} alt="label" />
        <Title>{title}</Title>
      </Wrapper>
      <Text>{text}</Text>
    </Card>
  );
};
