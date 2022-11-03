import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useForm } from '../../hooks/useForm'
import { activeBancoPregunta, startDeleting } from '../../actions/bancoPreguntas'

export const NoteScreen = () => {
  const dispatch = useDispatch()

  const { activePregunta } = useSelector(state => state.bancoPreguntas)
  // console.log(data)
  const [formValues, handleInputChange, reset] = useForm({
    pregunta_txt: '',
    pregunta_img: [],
    isVisible: true,
    claves: [],
  })
  const {
    pregunta_txt,
    pregunta_img,
    isVisible,
    claves,
  } = formValues

  const activeId = useRef(activePregunta?.id)

  useEffect(() => {
    if (activePregunta?.id !== activeId.current) {
      reset(activePregunta)
      activeId.current = activePregunta?.id
    }
  }, [activePregunta, reset])

  /*useEffect(() => {
    dispatch(activePregunta(formValues.id, { ...formValues }))
  }, [formValues, dispatch])*/

  /*const handleDelete = () => {
    dispatch(startDeleting(id))
  }*/

  return (
    <div className='notes__content'>
      {/*<h1 className='notes__title-input'> Banco de Preguntas </h1>*/}

      <textarea
        placeholder='Inserte Pregunta'
        className='notes__textarea'
        name='pregunta_txt'
        value={pregunta_txt}
        onChange={handleInputChange}
      ></textarea>

      {/*pregunta?.pregunta_img.map(img => (
        <div className='notes__image'>
          <img src={img} alt='imagen' />
        </div>
      ))*/}
    </div>
  )
}
