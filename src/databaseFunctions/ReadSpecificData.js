import { projectFirestore } from '../firebase/config';

export const ReadSpecificData = async (collectionName, orderBy, ascOrDesc, setData, field, operator, value) => {
  const snapshot = await projectFirestore.collection(collectionName)
    .orderBy(orderBy, ascOrDesc)
    .where(field, operator, value)
    .get();

    let documents = [];
    snapshot.forEach(doc => {
      documents.push({...doc.data(), id: doc.id})
    });
  setData(documents);
}

export default ReadSpecificData
