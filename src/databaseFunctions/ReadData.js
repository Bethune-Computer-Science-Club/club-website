import { projectFirestore } from '../firebase/config';

export const ReadData = async (collectionName, orderBy, ascOrDesc, setData) => {
  const unsub = await projectFirestore.collection(collectionName)
  .orderBy(orderBy, ascOrDesc)
  .onSnapshot((snap) => {
    let documents = [];
    snap.forEach(doc => {
      documents.push({...doc.data(), id: doc.id})
    });
    setData(documents);
  });

  return () => unsub(); //Unsubscribe from the collection
}

export default ReadData
