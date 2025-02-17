import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { playMusic } from '../Streaming/musicPlayer';

export default function StreamingScreen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const songUrl = "https://your-music-file-url.com/song.mp3";

  const handlePlay = async () => {
    const sound = await playMusic(songUrl);
    setIsPlaying(true);
  };

  return (
    <View>
      <Text>Now Streaming</Text>
      <Button title={isPlaying ? "Playing..." : "Play"} onPress={handlePlay} />
    </View>
  );
}