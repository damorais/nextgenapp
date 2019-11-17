const configuration = require('../config/database.js');

const MongoClient = require('mongodb');

getCollection = async (collection_name) => {
  
  console.log(collection_name);

  let connection = await MongoClient.connect(configuration.url, { poolSize: 5 });
  let db = connection.db(configuration.name)
  let collection = db.collection(collection_name);

  //console.log(await collection.find().toArray());

  return collection; 
}

module.exports = { getCollection };