import * as actionsTypes from './actionsTypes';
import { fetchLinks } from './links';
import { fetchComments } from './comments';
import { push } from 'react-router-redux'

export const login = user => dispatch => {
    // in real world we will have here some async operation to login, and we will chain more dispatches
    dispatch({
        type: actionsTypes.LOGIN,
        payload: user,
    });
    dispatch(fetchComments());
    dispatch(fetchLinks());
    dispatch(push('/')); // redirect after login
}
