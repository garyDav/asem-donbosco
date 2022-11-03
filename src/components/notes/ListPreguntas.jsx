import React from 'react'
import { useSelector } from 'react-redux'
import { PreguntaEntry } from './PreguntaEntry'

export const ListPreguntas = () => {
  const { preguntas } = useSelector(state => state.bancoPreguntas)

  return (
    <div className='questions_entries'>
      <div>
        {preguntas.map(pregunta => (
          <PreguntaEntry key={pregunta.id} {...pregunta} />
        ))}
      </div>
      <div></div>
    </div>
  )
}
