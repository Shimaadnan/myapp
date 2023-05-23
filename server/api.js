const { Pool } = require('pg');

const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors())
const db = new Pool({
    user: 'codeyourfuture',        // replace with you username
    host: 'localhost',
    database: 'homework',
    password: 'cyf123',
    port: 5432
});
app.get("/", (req, res) => {
	res.json({ message: "Hello, world!" });
});
app.get("/jobs", (req, res) => {
	db.query("select * from jobs")
		.then((jobs) => res.status(200).json(jobs.rows))
		.catch((err) => {
			console.error(err);
			res.status(500).send(err);
		});
});
app.listen(4500, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});