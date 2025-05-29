const { Pool } = require("pg");


module.exports = new Pool({
  host: "localhost", 
  user: "jymo",
  database: "customerix",
  password: "jymo",
  port: 5432 
});

