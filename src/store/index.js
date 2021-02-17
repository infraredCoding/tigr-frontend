// import Vuex from 'vuex';
import {createStore} from 'vuex';
import auth from './modules/auth';
import addCompEvent from './modules/addCompEvent';

export default createStore({
  modules: {
    auth,
    addCompEvent
  }
})
