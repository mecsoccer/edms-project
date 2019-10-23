function activityReducer(state = { activities:[] }, action) {
    switch(action.type) {
      case 'FETCH_ACTIVITIES':
        return { ...state, activities: action.payload };
      case 'ACT_FETCH_SUCCESS':
        return { ...state, fetched: action.payload };
      default:
        return state;
    }
  }
  
  export default activityReducer;
  