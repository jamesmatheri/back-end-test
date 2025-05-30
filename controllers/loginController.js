const jwt = require('jsonwebtoken')
const jwtOptions = require('../services/jwtConfig')
const pool = require('../db/pool')



exports.user_authenticate_post = async (req, res, next) => {
    const {mail,password } = req.body;
    console.log(mail,password)
    const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [mail]);
          const user = rows[0];
         

            if (!user) {
    res.status(401).json({ message: "No such user/email ID found" });
    return;
  }

  if (password === user.password) {
    const payload = { id: user.id };  
    const token = jwt.sign(payload, jwtOptions.secret);
    let resp = { message: "OK", token: token,user:user }
  
    res.json({data:resp});
  } else if(password !== user.password) {
    res.status(401).json({ message: "Passwords did not match" });
  }
  

}










