import { projectFirestore } from '../firebase/config';

export const DeleteData = (id, collectionName) => {
  const collectionRef = projectFirestore.collection(collectionName);

  collectionRef.doc(id).delete();
}

export default DeleteData
