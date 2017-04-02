import * as actionsTypes from './actionsTypes';

export const addVote = (id, entityType, scoreToAdd) => ({
  type: actionsTypes.ADD_VOTE + '_' + entityType,
  payload: {
      id,
      score: scoreToAdd,
  },
});