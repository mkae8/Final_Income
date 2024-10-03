import { sql } from "../../DATABASE/index.js";

export const userWallet = async (req, res) => {
  const { currency, balance } = req.body;
  const { userId } = res.locals;

  try {
    await sql`UPDATE users SET currency=${currency}, balance=${balance} WHERE userId=${userId}`;

    res.status(200).send("success");
  } catch (error) {
    console.log(error);
    res.status(500).send("nnana");
  }
};
