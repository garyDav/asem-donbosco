import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <h1 className='notes__title-input'> Banco de Preguntas </h1>

        <textarea
          placeholder='Inserte Pregunta'
          className='notes__textarea'></textarea>

        <div className='notes__image'>
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
            alt='imagen'
          />
        </div>
      </div>
    </div>
  )
}
