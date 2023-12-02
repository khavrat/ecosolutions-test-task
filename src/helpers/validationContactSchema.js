import * as Yup from "yup";

export const validationContactShema = Yup.object().shape({
  fullName: Yup.string()
    .required("Please enter fullname")
    .min(2, "Must be min 2 characters")
    .matches(/[а-яА-Яa-zA-Z]+/, "Wrong Fullname"),
  email: Yup.string().email("Wrong Email").required("Please enter e-mail"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Wrong Phone")
    .required("Please enter phone"),
  // message: Yup.string().max(200, "Too much text"),
});
