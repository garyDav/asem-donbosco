import { types } from '../types/types'

const initialState = {
  bancoPreguntas: {},
  activePregunta: null,
}

export const bancoPreguntasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.bancoPreguntasLoad:
      return {
        ...state,
        bancoPreguntas: [...action.payload],
      }
    /*case types.bancoPreguntasAddNew:
      return {
        ...state,
        bancoPreguntas: [action.payload, ...state.preguntas],
      }


    case types.bancoPreguntasUpdated:
      return {
        ...state,
        bancoPreguntas: state.preguntas.map(pregunta =>
          pregunta.id === action.payload.id ? action.payload.pregunta : pregunta
        ),
      }

    case types.bancoPreguntasDelete:
      return {
        ...state,
        active: null,
        bancoPreguntas: state.preguntas.filter(
          pregunta => pregunta.id !== action.payload
        ),
      }

    case types.bancoPreguntasLogoutCleaning:
      return {
        ...state,
        active: null,
        bancoPreguntas: [],
      }*/

    default:
      return state
  }
}
