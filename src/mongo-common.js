/**
  All configuration that is required for a shared mongo server hosted in the cloud
 */
const { MongoClient } = require('mongodb');

let database = null;

async function startDatabase() {
  // const mongoDBURL = `mongodb://mlab2020:abc123def!@ds031617.mlab.com:31617/learningmongo`;
  const mongoDBURL = 'mongodb+srv://jkearns885:Cpeyc1995@cluster0.schwj.mongodb.net/database1?retryWrites=true&w=majority'
  const connection = await MongoClient.connect(mongoDBURL, { useNewUrlParser: true });
  database = connection.db();
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};