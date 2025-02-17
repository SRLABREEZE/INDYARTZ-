export function authenticateRequest(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).send("Unauthorized");
  }
  next();
}