import { useEffect } from "react";
import { useFormik } from "formik";
import { validationContactShema } from "../../helpers/validationContactSchema";
import {
  Form,
  Wrapper,
  Label,
  Input,
  Error,
  Textarea,
  ButtonWrapper,
} from "./ContactForm.styled";
import { ButtonEmpty } from "../reusableComponents/buttonEmpty/ButtonEmpty";
import { showMessageToast } from "../../helpers/showToast";

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationContactShema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      localStorage.clear();
      resetForm();
      setSubmitting(false);
      showMessageToast("Your contacts are sent successfully");
    },
  });

  useEffect(() => {
    const saveData = localStorage.getItem("formData");
    if (saveData) {
      const parsedData = JSON.parse(saveData);
      formik.setValues(parsedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = {
      ...formik.values,
      [name]: value,
    };
    formik.setValues(newValues);
    localStorage.setItem("formData", JSON.stringify(newValues));
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <Label htmlFor="fullName">* Full name:</Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          onChange={handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          className={
            formik.touched.fullName && formik.errors.fullName ? "error" : ""
          }
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <Error>{formik.errors.fullName}</Error>
        ) : null}
      </Wrapper>

      <Wrapper>
        <Label htmlFor="email">* E-mail:</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={formik.touched.email && formik.errors.email ? "error" : ""}
        />
        {formik.touched.email && formik.errors.email ? (
          <Error>{formik.errors.email}</Error>
        ) : null}
      </Wrapper>
      <Wrapper>
        <Label htmlFor="phone">* Phone:</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          onChange={handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className={formik.touched.phone && formik.errors.phone ? "error" : ""}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <Error>{formik.errors.phone}</Error>
        ) : null}
      </Wrapper>

      <Label htmlFor="message">Message:</Label>
      <Textarea
        id="message"
        name="message"
        type="text"
        as="textarea"
        onChange={handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      />
      <ButtonWrapper>
        <ButtonEmpty nameButton="Send" type="submit" />
      </ButtonWrapper>
    </Form>
  );
};
