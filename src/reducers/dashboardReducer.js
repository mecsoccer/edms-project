function departmentReducer(state = { current_tab: '' }, action) {
    switch(action.type) {
      case 'CHANGE_TAB':
        return { ...state, current_tab: action.payload };
      default:
        return state;
    }
  }
  
  export default departmentReducer;
  