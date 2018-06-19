import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    issues: [
        {id: 1, msg: 'fix shit'},
        {id: 2, msg: 'fix more shit'},
        {id: 3, msg: 'fix shit again'},
    ]
}

export default new Vuex.Store({
    state
})