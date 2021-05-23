import { projectFirestore } from '../firebase/config';

export const ReadData = async (collectionName, orderBy, ascOrDesc, setData) => {
  const snapshot = await projectFirestore.collection(collectionName)
    .orderBy(orderBy, ascOrDesc)
    .get()

    let documents = [];
    snapshot.forEach(doc => {
      documents.push({...doc.data(), id: doc.id})
    });

  return documents; //Unsubscribe from the collection
}

export default ReadData
