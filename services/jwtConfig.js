const passportJWT = require("passport-jwt")


const ExtractJWT = passportJWT.ExtractJwt;

 const jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secret:"secret"
}


module.exports = jwtOptions;