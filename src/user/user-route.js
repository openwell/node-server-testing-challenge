const db = require("../database/user-model");

module.exports = server => {
//   server.post("/api/register", validateUser, register);
//   server.post("/api/login", validateUser, validateUserPassword, login);
   server.post("/api/register", register);
};

function register(req, res) {
  res.send('WElcome')
  // implement user registration
//   const { username, password } = req.body;
//   const data = {
//     username: username,
//     password: myBcrypt(password, 10)
//   };
//   db.createUser(data)
//     .then(dbResponse => {
//       return res.status(201).json({
//         data: dbResponse
//       });
//     })
//     .catch(err => {
//       if (err.code === "SQLITE_CONSTRAINT") {
//         return res.status(500).json({ error: "Username Already Exit" });
//       }
//       res.status(500).send(err);
//     });
}


