
//tried this, based on https://github.com/cernanb/notes-app/blob/master/js-frontend/src/adapters/NotesAdapter.js

class soupkitchenAdapter {
  constructor() {
    this.baseURL = 'http://localhost:3000/soupkitchens/'
    this.newFormURL = 'http://localhost:3000/soupkitchens/new'
  }

  getNewSoupKitchenForm() {
    return fetch(this.newFormURL)
  }
}