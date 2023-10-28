const handleValidation = ({ state }) => {
  let errors = {};
  let formIsValid = true;

  //Name
  if (!state.name) {
    formIsValid = false;
    errors.name = "Cannot be empty";
  }

  if (typeof state.name !== "undefined") {
    if (!state.name.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors.name = "Only letters";
    }
  }

  //Email
  if (!state.email) {
    formIsValid = false;
    errors.email = "Cannot be empty";
  }

  if (typeof state.email !== "undefined") {
    let lastAtPos = state.email.lastIndexOf("@");
    let lastDotPos = state.email.lastIndexOf(".");

    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        state.email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        state.email.length - lastDotPos > 2
      )
    ) {
      formIsValid = false;
      errors.email = "Email is not valid";
    }
  }

  this.setState({ errors: errors });
  return formIsValid;
};

export default handleValidation;
