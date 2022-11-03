import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewPregunta, startUploading } from '../../actions/bancoPreguntas'

export const NotesAppBar = () => {
  const dispatch = useDispatch()
  const { activePregunta } = useSelector(state => state.bancoPreguntas)

  const handleFileChange = e => {
    const files = e.target.files

    if (files.length > 0) {
      dispatch(startUploading(files))
    }
  }

  const handleSave = () => {
    dispatch(startNewPregunta(activePregunta))
  }

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click()
  }

  return (
    <div className='notes__appbar'>
      <span>Banco de Preguntas </span>

      <input
        id='fileSelector'
        type='file'
        name='file'
        style={{ display: 'none' }}
        onChange={handleFileChange}
        multiple
      />

      <div>
        <button className='btn' onClick={handlePictureClick}>
          Imagenes Pregunta
        </button>

        <button className='btn' onClick={handleSave}>
          Guardar
        </button>
      </div>
    </div>
  )
}
