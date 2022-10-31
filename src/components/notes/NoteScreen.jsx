import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { NotesAppBar } from './NotesAppBar'
/*import { useForm } from '../../hooks/useForm'
import { activeNote, startDeleting } from '../../actions/bancoPreguntas'
*/
export const NoteScreen = () => {
  /*const dispatch = useDispatch()

  const { active: pregunta } = useSelector(state => state.preguntas)
  const [formValues, handleInputChange, reset] = useForm(pregunta)
  const { pregunta_txt, pregunta_img, claves } = formValues

  const activeId = useRef(pregunta.id)

  useEffect(() => {
    if (pregunta.id !== activeId.current) {
      reset(pregunta)
      activeId.current = pregunta.id
    }
  }, [pregunta, reset])

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }))
  }, [formValues, dispatch])

  const handleDelete = () => {
    dispatch(startDeleting(id))
  }*/

  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <h1 className='notes__title-input'> Banco de Preguntas </h1>

        <textarea
          placeholder='Inserte Pregunta'
          className='notes__textarea'
          name='pregunta_txt'
          //value={pregunta_txt}
          //onChange={handleInputChange}
        ></textarea>

        {/*pregunta?.pregunta_img.map(img => (
          <div className='notes__image'>
            <img src={img} alt='imagen' />
          </div>
        ))*/}
      </div>
    </div>
  )
}
