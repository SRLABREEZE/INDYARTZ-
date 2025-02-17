import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { uploadMusic } from '../Uploads/uploadMusic';
import * as DocumentPicker from 'expo-document-picker';
import { auth } from '../firebaseConfig';

export default function UploadScreen() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === "success") {
      setFile(result);
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
    setUploading(true);

    try {
      const userId = auth.currentUser.uid;
      const downloadURL = await uploadMusic(file, userId);
      alert("Upload successful: " + downloadURL);
    } catch (error) {
      alert("Upload failed: " + error.message);
    }

    setUploading(false);
  };

  return (
    <View>
      <Text>Upload Your Music</Text>
      <Button title="Select File" onPress={pickFile} />
      <Button title={uploading ? "Uploading..." : "Upload"} onPress={handleUpload} disabled={uploading} />
    </View>
  );
}