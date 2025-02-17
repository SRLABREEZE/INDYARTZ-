import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// 🔥 Replace with your Firebase Project Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ============================================
// ✅ UPDATE USER PROFILE PICTURE
// ============================================
async function updateProfilePic(userId, imageUrl) {
    try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, { profilePic: imageUrl });
        console.log("✅ Profile Picture Updated Successfully");
    } catch (error) {
        console.error("❌ Error Updating Profile Picture:", error);
    }
}

export { updateProfilePic };