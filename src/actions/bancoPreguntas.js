import Swal from 'sweetalert2'

import { types } from '../types/types'
import { fetchConToken, fileUploadFormData } from '../helpers/fetch'

/*export const startNewPregunta = () => {
  return async (dispatch, getState) => {
    const data = getState().bancoPreguntas

    const newPregunta = {
      pregunta_txt: '',
      pregunta_img: [],
      isVisible: true,
      claves: [],
    }

    console.log(data, newPregunta)
    // {
    //   clave: String,
    //   isImg: { type: Boolean, default: false },
    // },

    const resp = await fetchConToken('banco_preguntas', newPregunta, 'POST')
    const body = await resp.json()

    // dispatch(activeBancoPregunta('123abc', newPregunta))
    // dispatch(addNewNote(doc.id, newNote))
  }
}*/

export const activeBancoPregunta = pregunta => ({
  type: types.bancoPreguntasActive,
  payload: {
    ...pregunta,
  },
})

/*export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
})*/

export const startLoadingQuestion = id => {
  return async dispatch => {
    const resp = await fetchConToken(`banco_preguntas/user/${id}`)
    const body = await resp.json()

    if (!body?.error) {
      dispatch(setBancoPreguntas(body.data))
    }
  }
}

export const setBancoPreguntas = bancoPreguntas => ({
  type: types.bancoPreguntasLoad,
  payload: bancoPreguntas,
})

export const startSavePregunta = pregunta => {
  return async (dispatch, getState) => {
    const { bancoPreguntas } = getState().bancoPreguntas

    const resp = await fetchConToken(
      `banco_preguntas/${bancoPreguntas._id}`,
      pregunta,
      'PUT'
    )
    const body = await resp.json()

    console.log(body)

    //dispatch(activeBancoPregunta(newPregunta))
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

export const noteLogout = () => ({
  type: types.notesLogoutCleaning,
})
*/

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

    //dispatch(deleteNote(id))
  }
}

/*export const deleteNote = id => ({
  type: types.notesDelete,
  payload: id,
})*/
