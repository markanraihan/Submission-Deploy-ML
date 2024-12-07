const { Firestore } = require('@google-cloud/firestore');
const accessSecret = require ('../server/acccessSecret');
 
async function storeData(id, data) {
  const db = new Firestore();
 
  const predictCollection = accessSecret.db.collection('predictions');
  return predictCollection.doc(id).set(data);
}
 
module.exports = storeData;