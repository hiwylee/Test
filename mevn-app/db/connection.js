// db/connection.js
const monk = require('monk');
// https://cloud.mongodb.com/ 
const constr = process.MONGODB_URI ||  'mongodb+srv://admin:Oraclewelcome1@mongodb-uj5w8.mongodb.net/test?retryWrites=true&w=majority';

const db = monk(constr);
db.catch(function(err) {
  console.log(err)
});
module.exports = db;