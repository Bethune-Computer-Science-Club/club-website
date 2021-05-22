import { projectStorage, projectFirestore } from '../firebase/config';


export const UpdateData = (data, id, picture, setProgress, collectionName) => {
  let error = null;
  
  const storageRef = projectStorage.ref(picture.name);
  const collectionRef = projectFirestore.collection(collectionName);

  if (picture.name === undefined) { //Picture is a link
    let finalData = {...data, picture: picture};
    collectionRef.doc(id).update(finalData);
  }
  else if (picture.name !== undefined) { //Picture is a file
    storageRef.put(picture).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      error = err;
    }, async () => {
      const url = await storageRef.getDownloadURL();
      let finalData = {...data, picture: url};
      collectionRef.doc(id).update(finalData);
    })
  }

  return error

}

export default UpdateData
