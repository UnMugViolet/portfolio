import { defineStore } from 'pinia'

export const useVolumeStore = defineStore('volume', {
  state: () => {
    let volume = parseFloat(localStorage.getItem('volume'))
    if (isNaN(volume)) {
      volume = 0.2
      localStorage.setItem('volume', volume.toString())
    }
    return {
      volume: volume,
      audioElements: {}
    }
  },
  actions: {
    setVolume(newVolume) {
      this.volume = newVolume
      localStorage.setItem('volume', newVolume)
      Object.values(this.audioElements).forEach((audio) => {
        audio.volume = newVolume
      })
    },
    playAudio(audioFile) {
      if (this.audioElements[audioFile]) {
        this.audioElements[audioFile].play().catch((error) => {
          console.log('Autoplay prevented:', error)
        })
      } else {
        const audio = new Audio(audioFile)
        audio.volume = this.volume
        audio.play().catch((error) => {
          console.log('Autoplay prevented:', error)
        })
        this.audioElements[audioFile] = audio
      }
    },
    pauseAudio(audioFile) {
      if (this.audioElements[audioFile]) {
        this.audioElements[audioFile].pause()
      }
    },
    resetAudio(audioFile) {
      if (this.audioElements[audioFile]) {
        this.audioElements[audioFile].currentTime = 0
      }
    },
    unmuteAudio() {
      Object.values(this.audioElements).forEach((audio) => {
        audio.volume = this.volume
      })
    }
  }
})
