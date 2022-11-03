import React from 'react'
import { Sidebar } from './Sidebar'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from '../notes/NothingSelected';
import { ListPreguntas } from '../notes/ListPreguntas';
import { NotesAppBar } from '../notes/NotesAppBar'
import { useSelector } from 'react-redux';

export const JournalScreen = () => {
  const { activePregunta } = useSelector(state => state.bancoPreguntas)

  return (
    <div className='journal__main-content'>
      <Sidebar />

      <main className="notes__main-content">
        <NotesAppBar />
        <NoteScreen />
        {
          ( activePregunta )
            ? ( <ListPreguntas /> )
            : ( <NothingSelected /> )
        }
      </main>
    </div>
  )
}
