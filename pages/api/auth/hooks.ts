import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, secret } = req.body;
    if (secret === process.env.AUTH0_HOOK_SECRET) {
      const user = await prisma.user.create({ data: { email: email } });
      console.log("created user", email);
    } else {
      console.log("you forgot to send me your secret!");
    }
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();

    res.send({ received: true });
  }
};
