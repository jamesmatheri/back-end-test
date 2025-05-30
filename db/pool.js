const { Pool } = require("pg");
require('dotenv').config()
const url = process.env.DB_URL


module.exports = new Pool({
  connectionString: url,
      ssl: {
      rejectUnauthorized: false 
    }
});
