import mysql2 from 'mysql2'
import express from 'express';
import cors from 'cors';

const connection = mysql2.createConnection({
  host: 'localhost',
  database: 'dishes',
  user: 'root',
  password: 'Kiramt95'
});

const app = express();
app.use(cors());

const port = 8081;

app.listen(port, () => {
  console.log(`SERVER : http://localhost:${port}`);
  connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected...");
  })
});

app.get("/", (req, res) => {
  const sql_query = `select * from dishes_list`;
  connection.query(sql_query, (err, result) => {
    if (err)
      console.log("Somthing went wrong");
    res.send(JSON.stringify(result));
  })
});

