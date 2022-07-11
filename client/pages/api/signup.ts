import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function Signup(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.status(400).json({ message: "No data provided" });
    return;
  }

  const { fn, ln, email, password } = req.body;
  const name: string = fn + " " + ln;

  res.json({
    token: jwt.sign({ name, email }, "secret"),
  });
}
