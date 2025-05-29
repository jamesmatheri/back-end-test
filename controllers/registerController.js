const Pool = require('../db/pool')

exports.user_create_post = async (req,res,next) => {
    try {
    await Pool.query("INSERT INTO users (username,email, password) VALUES ($1, $2, $3)", [
      req.body.username,
       req.body.mail,
      req.body.password,

    ]);
      res.status(200).send(' authenticated');
  } catch(err) {
    res.send("eeror occured");
  }
    
  }

