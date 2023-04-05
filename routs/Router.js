const router = require("express").Router()
const db= require("../config/dataBase.js")
router.get("/" ,(req,res) =>{

  db.query('SELECT * FROM user', (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.status(200).json(result);
    }
  });
  
})
router.post("/", (req,res) =>{
res.json({
  id: req.query.id,
  name:req.query.name,
  email:req.query.email,
  password:req.query.password
})
const name =req.query.name
const email =req.query.email
const password =req.query.password
const id =req.query.id
const sql = `INSERT INTO users (id,name, email, password) VALUES (?,?, ?, ?)`;
const values = [ id,name, email, password];
db.query(sql, values, (err, result) => {
  if (err){
    console.log(err)
    return
  }

  console.log(`User ${name} created successfully!`);
  res.sendStatus(200);
})
})
router.get("/user" ,(req,res) =>{
  res.send("hello user")
})
router.post('/users', (req, res) => {
  const id = req.query.id;

  connection.query('DELETE FROM users WHERE id = ?', id, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
});
module.exports = router
