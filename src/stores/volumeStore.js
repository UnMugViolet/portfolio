import { defineStore } from 'pinia';

export const useVolumeStore = defineStore({
  id: 'volume',
  state: () => {
    let volume = parseFloat(localStorage.getItem('volume'));
    if (isNaN(volume)) {
      volume = 0.2;
      localStorage.setItem('volume', volume.toString());
    }
    return {
      volume: volume,
    };
  },
  actions: {
    setVolume(newVolume) {
      this.volume = newVolume;
      localStorage.setItem('volume', newVolume);
    },
    playAudio(audioFiles) {
      audioFiles.forEach((file) => {
        let audio = new Audio(file);
        audio.volume = this.volume;
        audio.play();
      });
    },
  },
});