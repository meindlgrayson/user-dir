const express = require('express');
const mustacheExpress = require('mustache-express');
const morgan = require('morgan');
const fs = require('fs');

const homeController = require('./controllers/home-controller.js');
const userController = require('./controllers/user-controller.js');

let application = express();
application.use(homeController);
application.use(userController);
application.engine('mustache', mustacheExpress());
application.use(express.static(__dirname + '/public'))
application.set('views', './views');
application.set('view engine', 'mustache'); 

application.listen(3000);