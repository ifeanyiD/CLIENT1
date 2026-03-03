import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // No auth header
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1]
  

  jwt.verify(token, process.env.ACCESS_TOKEN_JWT_SECRET, (err, u) => {
    if (err) {
      return res.status(403).json({ message: "Token expired or invalid" });
    }

    // Attach decode to request
    req.user = u;

    next();
  });
};
