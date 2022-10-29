import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'

export const NotesAppBar = () => {
  const dispatch = useDispatch()
  const { active } = useSelector(state => state.notes)

  const handleSave = () => {
    dispatch(startSaveNote(active))
  }

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click()
  }

  const handleFileChange = e => {
    const files = e.target.files

    if (files.length > 0) {
      dispatch(startUploading(files))
    }
  }

  return (
    <div className='notes__appbar'>
      <span>2022</span>

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
