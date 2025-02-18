import { defineStore } from 'pinia'

export const useConnectionStore = defineStore('connection', {
  state: () => ({
    status: 'restart' // Possible values: 'disconnected', 'restart', 'loggedIn'
  }),
  actions: {
    disconnect() {
      this.status = 'disconnected'
    },
    restart() {
      this.status = 'restart'
    },
    login() {
      this.status = 'loggedIn'
    }
  }
})
