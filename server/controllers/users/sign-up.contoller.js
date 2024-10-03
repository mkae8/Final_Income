import bcrypt from "bcryptjs";
import { sql } from "../../DATABASE/index.js";
import { v4 as uuidv4 } from "uuid";

export const signUpController = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      return res.status(400).send("All fields are required");
    }
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    if (user.length) {
      return res.status(409).send("Email is already registered");
    }
    const userId = uuidv4();
    const createdAt = new Date();
    const hashedPassword = bcrypt.hashSync(password, 10);

    await sql`INSERT INTO users (userId, username, email, password, createdAt) VALUES (${userId}, ${username}, ${email}, ${hashedPassword}, ${createdAt})`;

    return res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};
