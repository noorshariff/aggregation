const mongoose = require('mongoose');

const dbConnection = () =>{
    if(process.env.NODE_ENV){
        let url ="mongodb+srv://Noorjabeena:Mango07@assighnment.v7khv.mongodb.net/test"
        mongoose.connect(url, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            autoIndex: true,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            serverSelectionTimeoutMS: 10000
        }).catch(console.log);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', () => {
            console.log('Database Connection Succeeded');
        });
        return db;

    }
}


module.exports = {
    dbConnection
}