const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  try {
    const AuthToken = req.headers("Authorization");
    if (AuthToken) {
      const token = await jwt.verify(AuthToken, process.env.SECRET_KEY);
      req.user = token;
      next();
    } else {
      res.status(401).json({ msg: "invalid user" });
    }
  } catch (error) {
    res.status(401).json({ msg: "invalid user" });
  }
};

module.exports=authentication;
