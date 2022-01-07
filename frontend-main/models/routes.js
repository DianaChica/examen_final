const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/router_db', {
    mongodb+srv://eeestupi:Chelita1744@cluster0.0.mongodb.net/router_db?retryWrites=true&w=majority: true,    
//useNewUrlParser: true,
},
(err) => {
    if (!err) {
        console.log('Connection suceeded');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./routes.model');