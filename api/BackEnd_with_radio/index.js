const express = require('express')
const app = express();

const db = require('./db');



app.use(express.json())

const ProductRoute = require('./productRoutes');
const UserRoute = require('./userRoutes');
const UserApplyRoute = require('./userApplyRoutes');

app.use('/app/data',ProductRoute);
app.use('/app/user',UserRoute);
app.use('/app/userApply',UserApplyRoute);

//Start the server
var port =5000;

app.listen(port,function(){
	console.log('server start on port' + port);
});

