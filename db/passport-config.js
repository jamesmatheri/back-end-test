
const passport = require('passport');
const passportJWT = require("passport-jwt")

const pool = require('./pool')
const jwtOptions = require('../services/jwtConfig')



const jwtSTrategy = passportJWT.Strategy;




const strategy = new jwtSTrategy(jwtOptions, async (jwt_payload,done) => {
try {
     const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [jwt_payload.id]);
      const user = rows[0];
      
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (payload.password !== user.password) {
        return done(null, false, { message: "Incorrect password" });
        
      }
      return done(null, user);    


} catch (error) {
    return new Error(err)
    
}
})

passport.use(strategy)