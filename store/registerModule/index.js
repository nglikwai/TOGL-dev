export const state = () => ({
    isSubmited: false
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
        state.isSubmited = true
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}