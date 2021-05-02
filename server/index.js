const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: 'sql5.freemysqlhosting.net',
  user: 'sql5407644',
  password: 'LxZBDJM6sn',
  database: 'sql5407644'
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res) => {
  const sqlSelect = "SELECT * FROM `ClubData`"
  db.query(sqlSelect, (err, result)=>{
    res.send(result)
  })
})

app.post('/api/insert', (req, res) => {
  const name = req.body.name
  const grade = req.body.grade
  const imageLink = req.body.imageLink


  const sqlInsert = "INSERT INTO `ClubData` (`Name`, `Grade`, `ImageLink`) VALUES (?,?,?);"
  db.query(sqlInsert, [name, grade, imageLink], (err, result)=>{
    console.log(err)
  })
})

app.listen(3001, () => {
  console.log("running");
});