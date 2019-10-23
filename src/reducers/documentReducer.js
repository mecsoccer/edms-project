function documentReducer(state = { documents:[] }, action) {
    switch(action.type) {
      case 'FETCH_DOCUMENTS':
        return { ...state, documents: action.payload };
      case 'DOC_FETCH_SUCCESS':
        return { ...state, fetched: action.payload };
      default:
        return state;
    }
  }
  
  export default documentReducer;
  