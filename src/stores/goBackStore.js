import { defineStore } from 'pinia'

export const useGoBackStore = defineStore({
  id: 'goBack',
  state: () => {
    let currentActiveDocument = []
    let currentActiveProject = []
    return {
      currentActiveDocument: currentActiveDocument,
      currentActiveProject: currentActiveProject
    }
  },
  actions: {

  }
})