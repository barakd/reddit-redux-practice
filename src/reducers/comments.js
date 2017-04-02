import {
    ADD_COMMENT,
    ADD_VOTE,  
    TOGGLE_ADD_COMMENT_MODAL,
    UPDATE_COMMENTS_REF,
    COMMENTS_LOADED,
} from '../actions/actionsTypes'

const initialState = {
    data: {},
    addCommentsModalOpen: false,
}

export default function commentsReducer(state = initialState, action){
    const { payload } = action;
    switch (action.type) {
    case ADD_COMMENT:
          return {
              ...state,
              data: {
                  ...state.data,
                  [payload.id]: createComment(payload, action.auth)
              }
    }
    case ADD_VOTE + '_comment':
        return {
            ...state,
            data: {
                ...state.data,
                [payload.id]: addVote(state.data[payload.id], payload.score),
            },
        };
    case UPDATE_COMMENTS_REF + '_comment':
    return {
            ...state,
            data: {
                ...state.data,
                [payload.id]: addCommentRef(state.data[payload.id], payload.commentId),
            },
    };
    case TOGGLE_ADD_COMMENT_MODAL:
        return {
            ...state,
            addCommentsModalOpen: payload.entityToCommentTo,
        };
    case COMMENTS_LOADED:
       return { ...state, data: { ...payload } };      
    default:
      return state
  }
}

function createComment(commentToAdd, user) {
    return Object.assign({
        author: user,
        comments: [],
        score: 0,
    }, commentToAdd);
}

function addVote(comment, score) {
    return Object.assign({}, comment, { score: score + comment.score } );
}

function addCommentRef(comment, commentIdToAdd) {
        return Object.assign({}, comment, { comments: [...comment.comments, commentIdToAdd] } );
}