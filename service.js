let jwt = require('jwt-simple');  
let moment = require('moment');  
let config = require('./config');

exports.createToken = (user)=> {  
  let payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};