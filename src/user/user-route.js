const db = require("./user-model");

module.exports = server => {
  server.get("/api/users", getUser);
  server.post("/api/users", addUser);
};
const database = [];
function getUser(req, res) {
  res.status(200).send(database);
}

function addUser(req, res) {
  const { name, hobby } = req.body;
  if (!req.body) {
    return res.status(400).json({
      message: "missing user data"
    });
  } else if (!hobby || hobby.trim().length < 1) {
    return res.status(400).json({
      message: "missing required hobby field"
    });
  } else if (!name || name.trim().length < 1) {
    return res.status(400).json({
      message: "missing required name field"
    });
  }
  database.push(req.body);
  return res.status(201).json(req.body);
}
