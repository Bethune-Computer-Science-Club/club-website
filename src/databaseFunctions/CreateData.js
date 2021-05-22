import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

export const CreateData = (data, picture, useTimestamp, setProgress, collectionName) => {
  let error = null;

  //References
  const storageRef = projectStorage.ref(picture.name);
  const collectionRef = projectFirestore.collection(collectionName);

  storageRef.put(picture).on('state_changed', (snap) => {
    let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    setProgress(percentage);
  }, (err) => {
    error = err;
  }, async () => {
    const url = await storageRef.getDownloadURL();
    let finalData;
    if (useTimestamp === true) { //If we need to add a timestamp
      finalData = {...data, picture: url, createdAt: timestamp()};
    } else {
      finalData = {...data, picture: url};
    }

    collectionRef.add(finalData);
  })

  return error
}
export default CreateData;
