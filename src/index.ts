
import rootStore from './rootStore'
import createStore from "./createStore";

const store = createStore(rootStore);

console.log(store.getState().users.users)
store.dispatch({type: 'add_user', user: {id: 1, name: 'juan'}})
store.dispatch({type: 'add_user', user: {id: 2, name: 'tu'}})
store.dispatch({type: 'add_user', user: {id: 1, name: 'dos'}})
console.log(store.getState().users.users)
