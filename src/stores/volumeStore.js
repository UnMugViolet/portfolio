import { defineStore } from 'pinia'

export const useVolumeStore = defineStore({
  id: 'volume',
  state: () => {
    let volume = parseFloat(localStorage.getItem('volume'))
    if (isNaN(volume)) {
      volume = 0.2
      localStorage.setItem('volume', volume.toString())
    }
    return {
      volume: volume,
      audioElements: []
    }
  },
  actions: {
    setVolume(newVolume) {
      this.volume = newVolume
      localStorage.setItem('volume', newVolume)
      this.audioElements.forEach((audio) => {
        audio.volume = newVolume
      })
    },
    playAudio(audioFiles) {
      this.audioElements = audioFiles.map((file) => {
        let audio = new Audio(file)
        audio.volume = 0 // Start muted
        audio.play().catch((error) => {
          console.log('Autoplay prevented:', error)
        })
        return audio
      })
    },
    unmuteAudio() {
      this.audioElements.forEach((audio) => {
        audio.volume = this.volume
      })
    }
  }
})
