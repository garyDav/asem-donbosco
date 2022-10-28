import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'

import { useForm } from '../../hooks/useForm'
import { setError, removeError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

export const RegisterScreen = () => {
  const dispatch = useDispatch()
  const { msgError } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    username: 'user.prof',
    email: 'user.prof@gmail.com',
    password: 'user.prof',
    password2: 'user.prof',

    nombre: 'Nombre Prof',
    appaterno: '',
    apmaterno: '',
    carnet: '10000000',
    extension: 'CH',
    //roles: ['profesor'],
  })

  const {
    username,
    email,
    password,
    password2,
    nombre,
    appaterno,
    apmaterno,
    carnet,
    extension,
  } = formValues

  const handleRegister = e => {
    e.preventDefault()

    if (isFormValid()) {
      dispatch(
        startRegisterWithEmailPasswordName({
          username,
          email,
          password,
          password2,
          nombre,
          appaterno,
          apmaterno,
          carnet,
          extension,
        })
      )
    }
  }

  const isFormValid = () => {
    if (username.trim().length === 0) {
      dispatch(setError('Username is required'))
      return false
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'))
      return false
    } else if (password !== password2 || password.length < 4) {
      dispatch(
        setError(
          'La contraseña debe tener al menos 5 caracteres y coincidir entre sí'
        )
      )
      return false
    } else if (nombre.trim().length === 0) {
      dispatch(setError('Nombre is required'))
      return false
    } else if (carnet.trim().length === 0) {
      dispatch(setError('Carnet is required'))
      return false
    } else if (extension.trim().length === 0) {
      dispatch(setError('Extension is required'))
      return false
    }

    dispatch(removeError())
    return true
  }

  return (
    <>
      <div className='auth__main'>
        <div className='auth__box-container'>
          <h3 className='auth__title'>Register</h3>

          <form onSubmit={handleRegister}>
            {msgError && <div className='auth__alert-error'>{msgError}</div>}

            <input
              type='text'
              placeholder='Username'
              name='username'
              className='auth__input'
              autoComplete='off'
              value={username}
              onChange={handleInputChange}
            />

            <input
              type='text'
              placeholder='Email'
              name='email'
              className='auth__input'
              autoComplete='off'
              value={email}
              onChange={handleInputChange}
            />

            <input
              type='password'
              placeholder='Password'
              name='password'
              className='auth__input'
              value={password}
              onChange={handleInputChange}
            />

            <input
              type='password'
              placeholder='Confirm password'
              name='password2'
              className='auth__input'
              value={password2}
              onChange={handleInputChange}
            />

            <input
              type='text'
              placeholder='Nombre'
              name='nombre'
              className='auth__input'
              autoComplete='off'
              value={nombre}
              onChange={handleInputChange}
            />

            <input
              type='text'
              placeholder='Apellido Paterno'
              name='appaterno'
              className='auth__input'
              autoComplete='off'
              value={appaterno}
              onChange={handleInputChange}
            />

            <input
              type='text'
              placeholder='Apellido Materno'
              name='apmaterno'
              className='auth__input'
              autoComplete='off'
              value={apmaterno}
              onChange={handleInputChange}
            />

            <input
              type='number'
              placeholder='Numero de Carnet'
              name='carnet'
              className='auth__input'
              autoComplete='off'
              value={carnet}
              onChange={handleInputChange}
            />

            <input
              type='text'
              placeholder='Extension'
              name='extension'
              className='auth__input'
              autoComplete='off'
              value={extension}
              onChange={handleInputChange}
            />

            <button type='submit' className='btn btn-primary btn-block mb-5'>
              Registrarse
            </button>

            <Link to='/auth/login' className='link'>
              ¿Ya registrado?
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}
