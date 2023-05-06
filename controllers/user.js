import { body, param, validationResult } from "express-validator";
import { userRepositories } from "../repositories/index.js";
import { EventEmitter } from "node:events";
const myEvent = new EventEmitter(); //listen
myEvent.on("event.register.user", (param) => {
  console.log(`They talk about: ${JSON.stringify(param)}`);
});
const login = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  const { email, password } = req.body; //tao bien email + password duoc nhan gia tri tu client chuyen vao
  //call repository
  await userRepositories.login({ email: email, password: password });

  res.status(200).json({
    message: "Login user sucessfully",
  });
};

const register = async (req, res) => {
  const { name, phoneNumber, address, email, password } = req.body;
  await userRepositories.register({
    name: name,
    phoneNumber: phoneNumber,
    address: address,
    email: email,
    password: password,
  });
  //Event Emitter
  myEvent.emit("event.register.user", { email, password });
  res.status(201).json({
    message: "Register user successfully",
    data: "detail user here",
  });
};

const getDetailUser = async (req, res) => {};
// many other funcion

export default { login, register, getDetailUser };
