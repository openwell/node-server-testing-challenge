const db = require("./user-model");

module.exports = server => {
   server.get("/api/user", register);
};

function register(req, res) {
  res.status(200).send('WElcome')

}


