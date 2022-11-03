import Swal from 'sweetalert2'

import { fetchSinToken, fetchConToken } from '../helpers/fetch'

import { types } from '../types/types'
import { startLoading, finishLoading } from './ui'
import { startLoadingQuestion } from './bancoPreguntas'

export const startLoginEmailPassword = (email, password) => {
  return async dispatch => {
    dispatch(startLoading())
    const resp = await fetchSinToken('auth/signin', { email, password }, 'POST')
    const body = await resp.json()

    if (!body?.error) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(startLoadingQuestion(body.data._id))
      dispatch(login(body.data))
      dispatch(finishLoading())
    } else {
      dispatch(finishLoading())
      Swal.fire( 'Error', `${body.message} ${body.stack}`, 'error' )
    }
  }
}

export const startRegisterWithEmailPasswordName = user => {
  return async dispatch => {
    dispatch(startLoading())
    const resp = await fetchSinToken('auth/signup', user, 'POST')
    const body = await resp.json()

    if (!body?.error) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(startLoadingQuestion(body.data._id))
      dispatch(login(body.data))
      dispatch(finishLoading())
    } else {
      dispatch(finishLoading())
      Swal.fire('Error', `${body.message} ${body.stack}`, 'error')
    }
  }
}

export const startChecking = () => {
  return async dispatch => {
    dispatch(startLoading())
    const resp = await fetchConToken('auth/jwt')
    const body = await resp.json()

    if (!body?.error) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(startLoadingQuestion(body.data._id))
      dispatch(login(body.data))
      dispatch(finishLoading())
    } else {
      dispatch(finishLoading())
      dispatch(checkingFinish())
    }
  }
}

const checkingFinish = () => ({ type: types.authCheckingFinish })

export const login = user => ({
  type: types.login,
  payload: user,
})

export const startLogout = () => {
  return async dispatch => {
    localStorage.clear()

    dispatch(logout())
  }
}

export const logout = () => ({
  type: types.logout,
})
