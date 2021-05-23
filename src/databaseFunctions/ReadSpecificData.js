import { projectFirestore } from '../firebase/config';

export const ReadSpecificData = async (collectionName, orderBy, ascOrDesc, field, operator, value) => {
  const snapshot = await projectFirestore.collection(collectionName)
    .orderBy(orderBy, ascOrDesc)
    .where(field, operator, value)
    .get();

    let documents = [];
    snapshot.forEach(doc => {
      documents.push({...doc.data(), id: doc.id})
    });

  return documents;
}

export default ReadSpecificData
