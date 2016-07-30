import { combineReducers } from 'redux'
import {
  REQUEST_TASKS, RECEIVE_TASKS,
  POST_TASK, postTask, fetchTasks,
  SHOW_MODAL, HIDE_MODAL,
  CHANGE_AUTH_FIELD, SIGN_USER_IN
} from '../actions'

import {
  REQUEST_PROJECTS, RECEIVE_PROJECTS
} from '../actions/projects';

function authForm (state = {}, action) {
  switch (action.type) {
    case CHANGE_AUTH_FIELD:
      return Object.assign({}, state, {
        [action.field]: action.value
      });

    default:
      return state;
  }
}

function tasks (state = {
  isFetching: false
}, action) {
  switch (action.type) {
    case REQUEST_TASKS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_TASKS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        lastUpdated: Date.now()
      });

    default:
      return state;
  }
}

function user (state = {}, action) {
  switch(action.type) {
    case SIGN_USER_IN:
      return Object.assign({}, state, {
        username: action.username
      });

    default:
      return state;
  }
}

function dashboard (state = {}, action) {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_PROJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        projects: action.projects,
        lastUpdated: Date.now()
      });

    default:
      return state;
  }
}

export default combineReducers({
  authForm,
  tasks,
  user,
  dashboard
});
