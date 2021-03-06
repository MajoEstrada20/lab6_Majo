let jwt = require('jwt-simple'); 
let moment = require('moment'); 
let config = require('./config');

exports.ensureAuthenticated = (req, res, next)=> { 
 if(!req.headers.authorization) {
 return res
 .status(403)
 .send({message: "Error"});
 }

 const token = req.headers.authorization.split(" ")[1];
 const payload = jwt.decode(token, config.TOKEN_SECRET);

 if(payload.exp <= moment().unix()) {
 return res
 .status(401)
 .send({message: "The token expires"});
 }

 req.user = payload.sub;
 next();
}