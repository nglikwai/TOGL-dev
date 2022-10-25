export const state = () => ({
    isSubmited: 0
})

//getters
export const getters = {
}
//actions
export const actions = {
    submitForm({ commit }) {
        commit("updateIsSubmitted")
    },

}
//mutations
export const mutations = {
    updateIsSubmitted(state) {
        state.isSubmited = state.isSubmited + 1
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}