//connect to express
const express=require('express')

var cors = require('cors')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//import module form db.js
const connectDB=require('./config/db');
const app=express();
const notFoundMiddleware=require('./middleware/not-found.js');
//Connect to database
connectDB();
//set port to 5000
const PORT=process.env.PORT || 5000;

//use body parser middleware
app.use(express.json({extended:false}));
app.use(cors())
//Get request
app.get('/',(req,res)=>res.send('API running'))
//app.use(notFoundMiddleware);
//Define routes for users,auth,profile,posts respectively
app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/profile',require('./routes/api/profile'))
app.use('/api/job',require('./routes/api/job'))
app.use('/api/proposal',require('./routes/api/proposal'))

//Listen to port 5000
app.listen(PORT,()=>console.log(`Server has start at port ${PORT}`))