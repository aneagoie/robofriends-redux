import ROBOTS_ACTION_TYPES from './Types';



const initialState = {
    searchField: '',
    robots: [],
    isPending: false,
    error: null
};



const robotsReducer = (state=initialState, {type, payload}) => {
  switch (type) {

      case ROBOTS_ACTION_TYPES.REQUEST_ROBOTS_START:
          return {
              ...state,
              isPending: true
          };

      case ROBOTS_ACTION_TYPES.REQUEST_ROBOTS_SUCCESS:
          return {
              ...state,
              robots: payload,
              isPending: false,
              error: null
          };
      case ROBOTS_ACTION_TYPES.REQUEST_ROBOTS_FAILED:
          return {
              ...state,
              isPending: false,
              error: payload
          };
      case ROBOTS_ACTION_TYPES.CHANGE_SEARCHFIELD:
          return {
              ...state,
              searchField: payload
          };



    default: return state
  }
};

export default robotsReducer;
