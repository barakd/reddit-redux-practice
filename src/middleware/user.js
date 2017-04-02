/** This middleware adds the current user data to the action data,
 *  this is to help any action that might need the current logged in user data
 */
const userMiddleware = store => next => action => {
  action.auth = store.getState().user;
  return next(action);
}

export default userMiddleware;