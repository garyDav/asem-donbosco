import Swal from 'sweetalert2'

import { db } from '../firebase/firebase-config'
import { types } from '../types/types'
import { fetchConToken, fileUploadFormData } from '../helpers/fetch'

/*export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote)

    dispatch(activeNote(doc.id, newNote))
    dispatch(addNewNote(doc.id, newNote))
  }
}

export const activeNote = (id, pregunta) => ({
  type: types.notesActive,
  payload: {
    id,
    ...pregunta,
  },
})

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
})

export const startLoadingNotes = uid => {
  return async dispatch => {

    const banco_preguntas = await fetchConToken(
      'banco_preguntas/6360198d8eef20a2f64ec147'
    )
    const banco_preguntasSnap = await banco_preguntas.json()
    const banco_pregunta = banco_preguntasSnap.data


    const preguntas = await loadNotes(uid)
    dispatch(setPreguntas(preguntas))
  }
}

export const setPreguntas = preguntas => ({
  type: types.notesLoad,
  payload: preguntas,
})*/

export const startSavePregunta = pregunta => {
  return async (dispatch, getState) => {
    console.log(pregunta)
    /*const { uid } = getState().auth

    if (!note.url) {
      delete note.url
    }

    const noteToFirestore = { ...note }
    delete noteToFirestore.id

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)

    dispatch(refreshNote(note.id, noteToFirestore))
    Swal.fire('Saved', note.title, 'success')*/
  }
}

/*export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
})

export const startUploading = files => {
  return async (dispatch, getState) => {
    //const { active: activeNote } = getState().notes

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      },
    })

    const resp = await fileUploadFormData('upload', files)

    if (!resp?.error) {
      console.log(resp.nameFiles)
      //activeNote.url = body.nameFiles

      //dispatch(startSavePregunta(activeNote))
    }

    Swal.close()
  }
}

export const startDeleting = id => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid
    await db.doc(`${uid}/journal/notes/${id}`).delete()

    dispatch(deleteNote(id))
  }
}

export const deleteNote = id => ({
  type: types.notesDelete,
  payload: id,
})

export const noteLogout = () => ({
  type: types.notesLogoutCleaning,
})
*/
