import texts from "../../data/texts.json";
import { Container } from "../reusableComponents/container/Container";
import { Grid } from "../about/Grid";
import {
  Section,
  ContentWrap,
  Title,
  TitleWrap,
  TextWrap,
  Text,
} from "./About.styled";

export const About = () => {
  return (
    <Section id="about">
      <Container>
        <ContentWrap>
          <TitleWrap>
            <Title>{texts.about.title}</Title>
          </TitleWrap>
          <TextWrap>
            <Text>
              {texts.about.discription}
            </Text>
          </TextWrap>
        </ContentWrap>
        <Grid />
      </Container>
    </Section>
  );
};
