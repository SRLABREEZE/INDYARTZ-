import { Audio } from 'expo-av';

export async function playMusic(url) {
  const { sound } = await Audio.Sound.createAsync(
    { uri: url },
    { shouldPlay: true }
  );
  return sound;
}