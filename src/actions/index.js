import axiosInstance from '../apis/edmsAPI';

export const fetchDepartments = () => async (dispatch, getState) => {
    try {
        const response = await axiosInstance.get('/departments');
        dispatch({ type: 'FETCH_DEPARTMENTS', payload: response.data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const fetchActivities = () => async (dispatch, getState) => {
    try {
        const response = await axiosInstance.get('/activities');
        dispatch({ type: 'FETCH_ACTIVITIES', payload: response.data });
    }
    catch (error) {
        console.log(error.message)
    }
}

export const fetchDocuments = (query = '') => async (dispatch, getState) => {
    try {
        const response = await axiosInstance.get(`/documents?${query}`);
        dispatch({ type: 'FETCH_DOCUMENTS', payload: response.data });
    }
    catch (error) {
        console.log(error.message)
    }
}

export const changeTab = (tab) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'CHANGE_TAB', payload: tab });
    }
    catch (error) {
        console.log(error.message)
    }
}