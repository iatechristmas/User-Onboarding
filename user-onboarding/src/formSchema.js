import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().trim().min(3, "Username required"),
  email: yup.string().email("Email must be valid").required("Email required"),
  password: yup.string().required("password is a required field"),
  tos: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
});

export default formSchema;
