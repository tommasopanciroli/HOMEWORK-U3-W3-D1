const initialState = {
  favourites: {
    content: [], // array aziende favorite
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITES':
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      }

    case 'REMOVE_FROM_FAVOURITES':
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (company, i) => i !== action.payload
          ),
        },
      }

    default:
      return state
  }
}

export default mainReducer
