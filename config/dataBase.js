
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodecrud'
})
connection.connect((err) =>{
  if(err){
    console.log("there is err " + err)
    return
  }
  console.log("connect ok............")
})
module.exports =connection
