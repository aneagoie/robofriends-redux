import ROBOTS_ACTION_TYPES from './Types'


let countFetch = 0 ;

export const setSearchField = (text) => dispatch => {
  dispatch({
        type: ROBOTS_ACTION_TYPES.CHANGE_SEARCHFIELD,
        payload: text
    })
};

export const requestRobotsStart = () => ({
    type: ROBOTS_ACTION_TYPES.REQUEST_ROBOTS_START,
});


export const requestRobots = () => async (dispatch) => {
  if (countFetch > 3 ) return ;
  countFetch += 1;

  dispatch(requestRobotsStart());

  try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();

      dispatch({
          type: ROBOTS_ACTION_TYPES.REQUEST_ROBOTS_SUCCESS,
          payload: data
      })
  }catch (e) {
      console.error("ERROR == requestRobots", e);
      dispatch({
          type: ROBOTS_ACTION_TYPES.REQUEST_ROBOTS_FAILED,
          payload: e
      })
  }
};

