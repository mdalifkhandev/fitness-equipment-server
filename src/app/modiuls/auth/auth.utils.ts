import jwt, { JwtPayload } from "jsonwebtoken";
export const createToken = (
  JwtPayload: {
    email: string;
    role: string;
  },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(JwtPayload, secret, { expiresIn });
};

export const varifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
