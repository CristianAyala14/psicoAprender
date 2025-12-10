import { checkAccessToken } from "../config/tokensControl.js";

const validateAccessToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access token missing or invalid format." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = checkAccessToken(token); 
    req.user = decoded; 
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired access token." });
  }
};

export default validateAccessToken;