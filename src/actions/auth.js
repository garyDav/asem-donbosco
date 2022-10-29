import Swal from 'sweetalert2'

import { fetchSinToken, fetchConToken } from '../helpers/fetch'

import { types } from '../types/types'
import { startLoading, finishLoading } from './ui'

export const startLoginEmailPassword = (email, password) => {
  return async dispatch => {
    dispatch(startLoading())
    const resp = await fetchSinToken('auth/signin', { email, password }, 'POST')
    const body = await resp.json()

    if (!body?.error) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(login(body.data))
      dispatch(finishLoading())
    } else {
      dispatch(finishLoading())
      Swal.fire(
        'Error',
        `${`${body.message} ${body?.stack}`} ${body?.stack}`,
        'error'
      )
    }
  }

  // return dispatch => {
  //   dispatch(startLoading())

  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(({ user }) => {
  //       dispatch(login(user.uid, user.displayName))

  //       dispatch(finishLoading())
  //     })
  //     .catch(e => {
  //       console.log(e)
  //       dispatch(finishLoading())
  //       Swal.fire('Error', e.message, 'error')
  //     })
  // }
}

export const startRegisterWithEmailPasswordName = user => {
  return async dispatch => {
    dispatch(startLoading())
    const resp = await fetchSinToken('auth/signup', user, 'POST')
    const body = await resp.json()

    if (!body?.error) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(login(body.data))
      dispatch(finishLoading())
    } else {
      dispatch(finishLoading())
      Swal.fire('Error', `${body.message} ${body?.stack}`, 'error')
    }
  }

  // return dispatch => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(async ({ user }) => {
  //       await user.updateProfile({ displayName: name })

  //       dispatch(login(user.uid, user.displayName))
  //     })
  //     .catch(e => {
  //       console.log(e)
  //       Swal.fire('Error', e.message, 'error')
  //     })
  // }
}

export const startChecking = () => {
  return async dispatch => {
    dispatch(startLoading())
    const resp = await fetchConToken('auth/jwt')
    const body = await resp.json()

    if (!body?.error) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

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
