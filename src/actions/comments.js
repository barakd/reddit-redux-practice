import { guidGenerator } from '../utils';
import * as actionsTypes from './actionsTypes';
import mocks from '../mocks/data';

export const addComment = (comment, forEntityType) => dispatch => {
    const commentId = guidGenerator();
    const addCommentAction = {
        type: actionsTypes.ADD_COMMENT,
        payload: Object.assign({ createdAt: Date.now(), id: commentId }, comment),
    };
    /** updates the entity comments ids map */
    const updateCommentRefs = {
        type: actionsTypes.UPDATE_COMMENTS_REF + '_' + forEntityType,
        payload: {
            id: comment.for,
            commentId,
        }
    };
    dispatch(addCommentAction);
    dispatch(updateCommentRefs);
};


/** either open add comment modal for the requested entity,
 *  or closes the modal if no entity given */
export const toggleAddCommentModal = (entityToCommentTo) => ({
    type: actionsTypes.TOGGLE_ADD_COMMENT_MODAL,
    payload: { entityToCommentTo, },
});

export const commentsLoaded = comments => ({
    type: actionsTypes.COMMENTS_LOADED,
    payload: comments,
});

export const fetchComments = () => dispatch => {
    // in real world we will have here some async operation to fetch comments
    dispatch(commentsLoaded(mocks.comments));
}
