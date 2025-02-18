import { defineStore } from 'pinia'

export const useGoBackStore = defineStore('goBack', {
  state: () => {
    let currentActiveDocument = null
    let currentActiveProject = null
    return {
      currentActiveDocument: currentActiveDocument,
      currentActiveProject: currentActiveProject
    }
  },
  actions: {}
})
