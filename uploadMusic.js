import { storage } from '../firebaseConfig';

export async function uploadMusic(file, userId) {
  const storageRef = storage.ref(`music/${userId}/${file.name}`);
  const uploadTask = storageRef.put(file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      snapshot => console.log("Uploading...", snapshot.bytesTransferred),
      error => reject(error),
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => resolve(downloadURL));
      }
    );
  });
}