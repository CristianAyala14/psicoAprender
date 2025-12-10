import { checkRefreshToken } from "../config/tokensControl.js";
import { black_listed_token_dao } from "../database/indexDb.js";

export const validateRefreshToken = async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token provided." });
  }

  try {
    const blacklisted = await black_listed_token_dao.findByReference(refreshToken);
    if (blacklisted) {
      return res.status(403).json({ message: "Refresh token is blacklisted." });
    }

    const decoded = checkRefreshToken(refreshToken);
    req.user = decoded; 
    next();

  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired refresh token." });
  }
};

