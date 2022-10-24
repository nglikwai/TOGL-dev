import Vuex from 'vuex';
import registerModule from './registerModule';

const createStore = () => {
    return new Vuex.Store({
        modules: {
            register: registerModule,

        }
    });
};

export default createStore