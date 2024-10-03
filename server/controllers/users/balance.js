import { sql } from "../../DATABASE/index.js";

export const balance = async (req, res) => {
  try {
    const { userId } = res.locals;
    const user = await sql(`SELECT * FROM users WHERE useid='${userId}'`);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ balance: user[0].balance });
  } catch (error) {
    console.log(error);
  }
};
