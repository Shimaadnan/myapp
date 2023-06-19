const { Pool } = require('pg');

const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.json())
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

app.post("/login",(req,res)=>{
	const sql="select * from login where useremail= ? and password=?";
	
	db.query(sql,[req.body.email,req.body.password],(err,data)=>{
		if(err) return res.json("Error")
		if(data.length>0){
			return res.json("Login Successfully")
		}else{
			return res.json("no record")
		}
	})
})





app.listen(4500, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});