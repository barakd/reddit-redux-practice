/**
 * Generates a unique id (a 1-in-a-million chance of collision), used to mock unique ids
 * for object creations, as in real world case, those ids will be determined by the server
 * and not the client
 */
/* eslint-disable */
export const guidGenerator = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
});