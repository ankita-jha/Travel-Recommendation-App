const places = require("./app/routes/places-routes");
let express = require('express'),
    app = express(),
    port = 5000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');

const cors = require('cors');
app.use(cors());

// mongoose instance connection url connection
mongoose.connect("mongodb://127.0.0.1:27017/travel-db", {
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log('Connected to Database')).catch((e)=>{
    console.log('Error: ',e);
})
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const initApp = require('./app/app');
initApp(app);
places(app);

app.listen(port);
console.log('Todo RESTful API server started on: ' + port);
