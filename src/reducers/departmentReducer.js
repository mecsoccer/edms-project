function departmentReducer(state = { departments:[] }, action) {
    switch(action.type) {
      case 'FETCH_DEPARTMENTS':
        return { ...state, departments: action.payload };
      case 'DEPT_FETCH_SUCCESS':
        return { ...state, fetched: action.payload };
      default:
        return state;
    }
  }
  
  export default departmentReducer;
  