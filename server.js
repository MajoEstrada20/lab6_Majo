let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let methodOverride = require("method-override");
let app = express();
//let User = require('./models/user'); 
let middleware = require('./middleware');
let service = require('./service');

// Connection to DB and configurations
 mongoose.connect('mongodb://localhost/token', (err, res)=> {
 if(err) throw err;
 console.log('Connected to Database');
 });
 //app.set('superSecret', config.secret); // secret variable

// Middlewares
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
 app.use(methodOverride());

 // =======================
 // routes ================
 // =======================
 app.get('/', (req, res)=> {
 res.send('Hola! API: http://localhost:3000/api');
 });

// Start server
 app.listen(3000, ()=> {
 console.log("Node server running on http://localhost:3000");
 });
 
 app.get('/setup', (req, res)=> {
    // create a sample user
    let nick = new User({ 
    name: 'Rodrigo', 
    password: 'pro',
    admin: true 
    });
   
   // save the sample user
    nick.save((err)=> {
    if (err) throw err;
   
   console.log('User saved successfully');
    res.json({ success: true });
    });
   });
   // API ROUTES -------------------
let apiRoutes = express.Router();

apiRoutes.get('/',(req, res)=> {
 res.json({ message: 'Bienvenido al api de programacion.com.py :)' });
});

apiRoutes.get('/users', (req, res)=> {
 User.find({}, (err, users)=> {
 res.json(users);
 });
});

app.use('/api', apiRoutes);

app.get('/setup', (req, res)=> {
   // create a sample user
   let nick = new User({ 
   name: 'Carlos', 
   password: 'hola',
   admin: true 
   });
  
  // save the sample user
   nick.save( (err) => {
   if (err) throw err;
  
  console.log('User saved successfully');
   res.json({ success: true });
   });
  });

  // API ROUTES -------------------

//let apiRoutes = express.Router();

apiRoutes.get('/', (req, res)=> {
 res.json({ message: 'Bienvenido al api de programacion.com.py :)' });
});

apiRoutes.get('/users', (req, res)=> {
 User.find({}, (err, users)=> {
 res.json(users);
 });
});

app.use('/api', apiRoutes);