async function login({ email, password }) {
  return console.log("Login user in user repository with email: " + email);
}

async function register({ name, phoneNumber, address, email, password }) {
  return console.log(
    "Register user with:" + name + "email: " + email + "password: " + password
  );
}

export default {
  login,
  register,
};
