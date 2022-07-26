const { nanoid } = require('nanoid')
const notes = require('./notes')

const response = (status, message, data) => {
  return {
    status,
    message,
    data
  }
}

const addNoteHanlder = (req, h) => {
  const { title, tags, body } = req.payload
  const id = nanoid(16)
  const currentDate = new Date().toISOString()
  const note = {
    id,
    title,
    tags,
    body,
    createdAt: currentDate,
    updatedAt: currentDate
  }
  notes.push(note)
  const isSuccess = notes.filter(note => note.id === id).length > 0

  if (isSuccess) {
    const res = response('success', 'Catatan berhasil ditambahkan',
                  {
                    noteId: id
                  }
                )
    return h.response(res).code(201)
  }

  const res = response('fail', 'Catatan gagal ditambahkan')
  return h.response(res).code(500)
}

const getAllNoteHanlder = () => response('success', 'Catatan berhasil ditampilkan', notes)

const getNoteByIdHandler = (req, h) => {
  const { id } = req.params
  const note = notes.filter(note => note.id === id)[0]

  if (note !== undefined) {
    const res = response('success', undefined, note)
    return h.response(res).code(200)
  }

  const res = response('fail', 'Catatan tidak ditemukan')
  return h.response(res).code(404)
}

const editNoteByIdHandler = (req, h) => {
  const { id } = req.params

  const { title, tags, body } = req.payload
  const updatedAt = new Date().toISOString()
  const index = notes.findIndex(note => note.id === id)
  if (index === -1) {
    return h.response(response('fail', 'Catatan tidak ditemukan')).code(404)
  }
  
  notes[index] = {
    ...notes[index],
    title,
    tags,
    body,
    updatedAt
  }
  return h.response(response('success', 'Catatan berhasil diperbarui')).code(200)
}

const deleteNoteByIdHandler = (req, h) => {
  const { id } = req.params
  const index = notes.findIndex(note => note.id === id)
  if (index === -1) {
    return h.response(response('fail', 'Catatan tidak ditemukan')).code(404)
  }

  notes.splice(index, 1)
  return h.response(response('success', 'Catatan berhasil dihapus')).code(200)
}

module.exports = { 
  addNoteHanlder, 
  getAllNoteHanlder, 
  getNoteByIdHandler ,
  editNoteByIdHandler,
  deleteNoteByIdHandler
}
