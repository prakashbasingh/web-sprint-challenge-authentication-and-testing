/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //adding codes to verify users are logged in
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || "Keeping It Safe, Keeping It Secret???"

  if(token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if(error) {
        //if token is invalid
        res.status(401).json({ error, you: "shall not pass!!!"})
      } else {
        //if token is good we can see the data inside the decodedToken
        req.jwt = decodedToken;

        next()
      }
    })
  } else {
    res.status(401).json({ you: "can not touch this" });
  }
};
