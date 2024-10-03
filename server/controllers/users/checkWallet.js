import { sql } from "/Users/24LP9087/Desktop/income/server/DATABASE/index.js";

export const checkWallet = async (req, res) => {
  const { userId } = res.locals;

  try {
    const user = await sql`SELECT * FROM users WHERE userId = ${userId}`;
    if (user[0]?.currency && user[0]?.balance) {
      res.status(200).send(user);
      return;
    }
    res.status(200).send(false);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
