import { combineReducers } from 'redux';
import departmentReducer from './departmentReducer';
import activityReducer from './activityReducer';
import documentReducer from './documentReducer';
import dashboardReducer from './dashboardReducer';

export default combineReducers({
  department: departmentReducer,
  activity: activityReducer,
  document: documentReducer,
  dashboard: dashboardReducer,
});
