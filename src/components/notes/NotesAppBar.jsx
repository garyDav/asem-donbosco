import React from 'react'

export const NotesAppBar = () => {
  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click()
  }

  const handleFileChange = e => {
    const files = e.target.files

    if (files.length > 0) {
      dispatch()
    }
  }

  return (
    <div className='notes__appbar'>
      <span>28 de agosto 2020</span>

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

        <button className='btn'>Save</button>
      </div>
    </div>
  )
}
