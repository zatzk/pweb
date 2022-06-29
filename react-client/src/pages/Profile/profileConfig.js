import {collection,  doc,  getDocs,  query,  updateDoc,  where} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage';
import { db, storage } from '../../services/firebase';

const deleteFile = (filePath) => {
  const imageRef = ref(storage, filePath);
  return deleteObject(imageRef);
};


const uploadFile = (file, filePath) => {
  return new Promise(async (resolve, reject) => {
    const storageRef = ref(storage, filePath);
    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      resolve(url);
    } catch (error) {
      reject(error);
    }
  });
};


const updateUserRecords = (collectionName, uid, updatedObj) => {
  return new Promise(async (resolve, reject) => {
    const q = query(collection(db, collectionName), where('uid', '==', uid));
    try {
      const snapshot = await getDocs(q);
      const updatePromises = [];
      snapshot.forEach((document) => {
        updatePromises.push(
          updateDoc(doc(db, collectionName, document.id), updatedObj)
        );
      });
      await Promise.all(updatePromises);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export {updateUserRecords, deleteFile, uploadFile};