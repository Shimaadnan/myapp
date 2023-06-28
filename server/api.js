
const { Pool } = require("pg");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const db = new Pool({
  user: "codeyourfuture", // replace with you username
  host: "localhost",
  database: "homework",
  password: "cyf123",
  port: 5432,
});
app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});
app.get("/jobs", (req, res) => {
  db.query("select * from jobs")
    .then((jobs) => res.status(200).send(jobs.rows))
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});
app.post("/login", (req, res) => {
  if (req.body.email && req.body.password) {
    res.status(200).send("Login Successfully");
  }
  //   const sql = "select * from login where useremail= ? and password=?";
  //   db.query(sql, [req.body.email, req.body.password], (err, data) => {
  //     if (err) {
  //       return res.status(500).send("Error", err);
  //     }
  //     if (data.length > 0) {
  //       return res.status(200).send("Login Successfully");
  //     } else {
  //       return res.status(404).send("no record");
  //     }
  //   });
});
app.listen(4500, function () {
  console.log("Server is listening on port 4500. Ready to accept requests!");
});