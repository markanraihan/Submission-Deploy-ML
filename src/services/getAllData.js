const { Firestore } = require('@google-cloud/firestore');
const accessSecret = require ('../server/accessSecret');

async function getAllData(accessSecret) {
    const db = new Firestore();
    const predictCollection = accessSecret.db.collection('predictions');
    
    const allData = await predictCollection.get();
    return allData;
}

module.exports = getAllData;