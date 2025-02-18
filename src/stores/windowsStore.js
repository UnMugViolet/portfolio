import { defineStore } from 'pinia'

export const useWindowsStore = defineStore('windows', {
  state: () => ({
    openWindowIds: JSON.parse(localStorage.getItem('windows')) || []
  }),
  actions: {
    saveState() {
      localStorage.setItem('windows', JSON.stringify(this.openWindowIds))
    },
    loadState() {
      this.openWindowIds = JSON.parse(localStorage.getItem('windows')) || []
    },
    addWindowStore(windowId) {
      if (!this.openWindowIds.includes(windowId)) {
        this.openWindowIds.push(windowId)
        this.saveState()
      }
    },
    removeWindowStore(windowId) {
      this.openWindowIds = this.openWindowIds.filter((id) => id !== windowId)
      this.saveState()
    }
  }
})
