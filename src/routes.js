const { 
  addNoteHanlder, 
  getAllNoteHanlder, 
  getNoteByIdHandler, 
  editNoteByIdHandler,
  deleteNoteByIdHandler
} = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHanlder
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNoteHanlder
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  }
]

module.exports = routes
