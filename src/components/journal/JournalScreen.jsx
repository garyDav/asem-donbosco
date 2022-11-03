import React from 'react'
import { Sidebar } from './Sidebar'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from '../notes/NothingSelected'
import { ListPreguntas } from '../notes/ListPreguntas'
import { NotesAppBar } from '../notes/NotesAppBar'
import { useSelector } from 'react-redux'

export const JournalScreen = () => {
  const { preguntas } = useSelector(state => state.bancoPreguntas)

  console.log(preguntas)

  return (
    <div className='journal__main-content'>
      <Sidebar />

      <main className='notes__main-content'>
        <NotesAppBar />
        <NoteScreen />
        {preguntas.length > 0 ? <ListPreguntas /> : <NothingSelected />}
      </main>
    </div>
  )
}
