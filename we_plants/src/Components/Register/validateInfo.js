export default function validateInfo(values) {
  let errors = {};
  //user info validation
  if (!values.first_name) {
    errors.first_name = "first name required";
  } else if (!/^[A-Za-z]+/.test(values.name)) {
    errors.first_name = "Enter a valid first name";
  }
  if (!values.last_name) {
    errors.last_name = "last name required";
  } else if (!/^[A-Za-z]+/.test(values.name)) {
    errors.last_name = "Enter a valid last name";
  }
  //Email validation
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  //Password one and two validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
