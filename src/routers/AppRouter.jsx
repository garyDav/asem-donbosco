import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { firebase } from '../firebase/firebase-config'
import { PrivateRoute } from './PrivateRoute'

import { JournalScreen } from '../components/journal/JournalScreen'
import { login, startChecking } from '../actions/auth'
import { PublicRoute } from './PublicRoute'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { startLoadingQuestion } from '../actions/bancoPreguntas'

export const AppRouter = () => {
  const dispatch = useDispatch()
  const { checking, _id } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(startChecking())
    //dispatch(startLoadingQuestion('abc123'))
  }, [dispatch])

  if (checking) {
    return <h5>Espere...</h5>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/auth/login'
          element={
            <PublicRoute isAuthenticated={!!_id}>
              <LoginScreen />
            </PublicRoute>
          }
        />

        <Route
          path='/auth/register'
          element={
            <PublicRoute isAuthenticated={!!_id}>
              <RegisterScreen />
            </PublicRoute>
          }
        />

        <Route
          path='/*'
          element={
            <PrivateRoute isAuthenticated={!!_id}>
              <JournalScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
