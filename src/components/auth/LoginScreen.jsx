import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from '../../hooks/useForm'
import { startLoginEmailPassword } from '../../actions/auth'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: 'admin@gmail.com',
    password: 'admin',
  })

  const { email, password } = formValues

  const handleLogin = e => {
    e.preventDefault()
    dispatch(startLoginEmailPassword(email, password))
  }

  return (
    <>
      <div className='auth__main'>
        <div className='auth__box-container'>
          <h3 className='auth__title'>Login</h3>

          <form onSubmit={handleLogin}>
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

            <button
              type='submit'
              className='btn btn-primary btn-block'
              disabled={loading}>
              Login
            </button>

            <div className='auth__social-networks'></div>

            <Link to='/auth/register' className='link'>
              Crear una nueva cuenta
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}
