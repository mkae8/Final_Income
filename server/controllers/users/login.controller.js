import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "dotenv";
import { sql } from "../../DATABASE/index.js";

env.config();

export const loginController = async (req, res) => {
  const { password, email } = req.body;
  const success = true;

  const user = await sql(`SELECT * FROM users WHERE email='${email}'`);

  if (user.length == 0) {
    success == false;
    res.status(400).send("Username or password wrong");
    return;
  }

  const isMatch = await bcrypt.compare(password, user[0].password);

  if (!isMatch) {
    res.status(400).send("Username or password wrong");
    return;
  }

  const token = await jwt.sign({ userId: user[0].useid }, process.env.SECRET, {
    expiresIn: "1d",
  });

  res.status(200).send({ massage: success, user, token });
};
