import {
    ADD_LINK,
    ADD_VOTE,
    LINKS_LOADED,
    UPDATE_COMMENTS_REF,
} from '../actions/actionsTypes'

const initialState = {
    data: {},
}

export default function linksReducer(state = initialState, action){
    const { payload } = action;
    switch (action.type) {
    case ADD_LINK:
          return {
              ...state,
              data: {
                  ...state.data,
                  [payload.id]: createLink(payload, action.auth)
              }
    }
    case LINKS_LOADED:
        return { ...state, data: { ...payload } };
    case ADD_VOTE + '_link':
        return {
            ...state,
            data: {
                ...state.data,
                [payload.id]: addVote(state.data[payload.id], payload.score),
            },
        };
    case UPDATE_COMMENTS_REF + '_link':
    return {
            ...state,
            data: {
                ...state.data,
                [payload.id]: addCommentRef(state.data[payload.id], payload.commentId),
            },
        };         
    default:
      return state
  }
}

function createLink(linkToAdd, user) {
    return Object.assign({
        comments: [],
        score: 0,
        author: user,
    }, linkToAdd);
}

function addVote(link, score) {
    return Object.assign({}, link, { score: score + link.score } );
}

function addCommentRef(link, commentIdToAdd) {
        return Object.assign({}, link, { comments: [...link.comments, commentIdToAdd] } );
}