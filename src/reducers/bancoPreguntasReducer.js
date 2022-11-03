import { types } from '../types/types'

/**
 * {
    pregunta_txt: '',
    pregunta_img: [],
    isVisible: true,
    claves: [],
  }
 */

const initialState = {
  bancoPreguntas: {},
  preguntas: [],
  activePregunta: {
    pregunta_txt: '',
    pregunta_img: [],
    isVisible: true,
    claves: [],
  },
}

export const bancoPreguntasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.bancoPreguntasActive:
      return {
        ...state,
        activePregunta: {
          ...action.payload,
        },
      }

    case types.bancoPreguntasLoad:
      return {
        ...state,
        bancoPreguntas: { ...action.payload },
        preguntas: [...action.payload.preguntas],
      }

    case types.bancoPreguntasAddNew:
      return {
        ...state,
        preguntas: [action.payload, ...state.preguntas],
      }

    /*case types.bancoPreguntasUpdated:
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
