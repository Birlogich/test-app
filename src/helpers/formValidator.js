export const formValidator = () => {
  const validateEmail = {
    required: "Email is required",
    minLength: {
      value: 6,
      message: "Email is too short",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Please enter a valid email",
    },
  };

  const validateUsername = {
    required: "Username is required",
    minLength: {
      value: 3,
      message: "Username is too short",
    },
    pattern: {
      value: /^[a-zA-Z0-9_]{3,20}$/,
      message: "Please enter a valid Username",
    },
  };

  const validatePassword = {
    required: "Password is required",
    minLength: {
      value: 4,
      message: "Password is too short",
    },
  };

  return { validateEmail, validateUsername, validatePassword };
}

