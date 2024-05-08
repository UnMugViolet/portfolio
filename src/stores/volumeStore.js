import { defineStore } from 'pinia';

export const useVolumeStore = defineStore({
  id: 'volume',
  state: () => {
    // If volume is not in localStorage, set it to 1
    if (!localStorage.getItem('volume')) {
      localStorage.setItem('volume', '0.9');
    }

    // Retrieve volume level from localStorage
    return {
      volume: parseFloat(localStorage.getItem('volume')),
    };
  },
  actions: {
    setVolume(newVolume) {
      this.volume = newVolume;
      localStorage.setItem('volume', newVolume);
    },
  },
});