import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().required("name is a required field"),
  email: yup.string().required("email is a required field"),
  password: yup.string().required("password is a required field"),
  tos: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
});

export default formSchema;
