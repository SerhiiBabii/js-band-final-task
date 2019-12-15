import { createStore } from 'redux';
import reducers from './reducers/reducers';
import { saveState } from './localStorage/localStorage';

// eslint-disable-next-line no-underscore-dangle
const store = createStore(reducers);

store.subscribe(() => {
  saveState({
    user: store.getState().books.user,
  });
});

export default store;
