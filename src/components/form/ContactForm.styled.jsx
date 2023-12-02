import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 36px 12px;
  background-color: var(--card-color);

  @media screen and (min-width: 768px) {
    padding: 36px 24px;
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    padding: 48px;
    width: 596px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 28px;
  position: relative;
`;

export const Label = styled.label`
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--text-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.64px;
`;

export const Input = styled.input`
  width: 100%;
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--cardTitleMd-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.72px;
  margin-top: 8px;
  padding-bottom: 8px;
  border: none;
  border-bottom: solid 1px var(--accent-color);
  background-color: var(--card-color);

  &:focus {
    outline: none;
    background-color: var(--bg-color);
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--card-color) inset;
  }

  &.error {
    border-bottom: solid 1px var(--form-invalid-color);
  }

  @media screen and (min-width: 1280px) {
    margin-top: 12px;
    padding-bottom: 9px;
  }
`;

export const Error = styled.div`
  position: absolute;
  right: 0;
  color: var(--form-invalid-color);
  text-align: right;
  font-family: Fira Sans;
  font-size: var(--errorText-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.48px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--cardTitleMd-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.72px;
  padding: 8px 0;
  margin-top:8px;
  border: none;
  border-bottom: solid 1px var(--accent-color);
  background-color: var(--card-color);
  min-height: 125px;
  resize: none;

  &:focus {
    outline: none;
    background-color: var(--bg-color);
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--card-color) inset;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 16px 0 0 auto;

  @media screen and (min-width: 1280px) {
    margin: 32px 0 0 auto;
  }
`;

