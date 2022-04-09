const util = require("../utilities/helperFunctions");

const checkRole = (roles) => (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1].split(".")[1];
  let decode = JSON.parse(util.base64Decode(token));
  !roles.includes(decode.role)? res.status(401).json("Unauthorized"): next();
};

module.exports = {
  checkRole,
};
