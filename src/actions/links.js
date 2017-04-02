import * as actionsTypes from './actionsTypes';
import { guidGenerator } from '../utils';
import mocks from '../mocks/data';

export const addLink = link => ({
  type: actionsTypes.ADD_LINK,
  payload: Object.assign({ createdAt: Date.now(), id: guidGenerator() }, link),
});


export const linksLoaded = links => ({
    type: actionsTypes.LINKS_LOADED,
    payload: links,
});

export const fetchLinks = () => dispatch => {
    // in real world we will have here some async operation to fetch links
    dispatch(linksLoaded(mocks.links));
}
