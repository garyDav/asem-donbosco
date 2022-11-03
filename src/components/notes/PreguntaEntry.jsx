import React from 'react'

export const PreguntaEntry = ({
  id,
  pregunta_txt,
  pregunta_img,
  isVisible,
  claves,
}) => {
  const handleEntryClick = () => {}

  return (
    <div className='' onClick={handleEntryClick}>
      <div className=''>
        <p className=''>{pregunta_txt}</p>
      </div>
    </div>
  )
}
