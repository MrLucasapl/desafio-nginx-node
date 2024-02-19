const express = require("express");
const { createConnection } = require("mysql2");

const app = express();

const connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.get("/", async (req, res) => {
  const name = JSON.stringify(req.query.name);

  if (name) {
    connection.query("INSERT INTO people (name) VALUES (?)", [name]);
  }

  connection.query("SELECT * FROM people", function (error, results, fields) {
    const html = `
    <h1>Full Cycle Rocks!</h1>
    <ol>
      ${results && results?.map((person) => `<li>${person.name}</li>`).join("")}
    </ol>
    `;

    res.send(html);
  });
});

app.listen(3000, "0.0.0.0");
