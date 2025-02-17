import React from 'react';
import { View, Text, Button } from 'react-native';
import { db } from '../firebaseConfig';

export default function AdminDashboard() {
  const handleVerifyUser = async (userId) => {
    await db.collection("users").doc(userId).update({ verified: true });
    alert("User Verified!");
  };

  return (
    <View>
      <Text>Admin Panel</Text>
      <Button title="Verify User" onPress={() => handleVerifyUser("USER_ID_HERE")} />
    </View>
  );
}