const mongoose = require('mongoose');
// database connection
mongoose
    .connect(
        'mongodb+srv://emery:05xIIYLOc6UOjH9h@cluster0-l8vui.mongodb.net/upaxdb?retryWrites=true', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'upaxdb' // db
        },
        function(err) {
            if (err) {
                return console.dir(err);
            }
        })
