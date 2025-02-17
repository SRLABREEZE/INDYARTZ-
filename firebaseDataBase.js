import { db } from '../firebaseConfig';

// Save user data
export function saveUserData(userId, userData) {
  return db.collection("users").doc(userId).set(userData);
}

// Save uploaded music details
export function saveMusicData(userId, musicData) {
  return db.collection("music").add({ userId, ...musicData });
}