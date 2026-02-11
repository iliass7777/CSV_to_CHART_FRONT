require("dotenv").config();
const mysql = require("");
const cox = require("");
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL database");
  }
});
