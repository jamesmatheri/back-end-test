#! /usr/bin/env node

const { Client } = require("pg");






const SQL = `

 CREATE TABLE IF NOT EXISTS users (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   username VARCHAR(255),
   email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL
 );



`;


async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://jymo:tWb7ieval5ucrTiJ7rAbBdXSW28118V3@dpg-d0sjhdidbo4c73f4upqg-a.oregon-postgres.render.com/customerix",
      ssl: {
      rejectUnauthorized: false 
    }
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();



//node db/populate.js  

//  INSERT INTO monthly_data (institution, month, growthrate ) VALUES
//  ('Stanbic Bank', 'Jan', 1),
// ('Stanbic Bank', 'Feb', 4),
//  ('Stanbic Bank', 'Mar', 1),
//  ('Stanbic Bank', 'Apr', 1),
//  ('Stanbic Bank', 'May', 7),
//  ('Stanbic Bank', 'Jun', 1),
//  ('Stanbic Bank', 'Jul', 1),
//  ('Stanbic Bank', 'Aug', 3),
//  ('Stanbic Bank', 'Sep', 1),
//  ('Stanbic Bank', 'Oct', 1),
//  ('Stanbic Bank', 'Nov', 5),
//  ('Stanbic Bank', 'Dec', 10);

// INSERT INTO monthly_data (institution, month, growthrate ) VALUES
// ('Equity Bank', 'Jan', 10),
// ('Equity Bank', 'Feb', 1),
// ('Equity Bank', 'Mar', 13),
// ('Equity Bank', 'Apr', 1),
// ('Equity Bank', 'May', 13),
// ('Equity Bank', 'Jun', 12),
// ('Equity Bank', 'Jul', 1),
// ('Equity Bank', 'Aug', 1),
// ('Equity Bank', 'Sep', 13),
// ('Equity Bank', 'Oct', 31),
// ('Equity Bank', 'Nov', 1),
// ('Equity Bank', 'Dec', 13)



