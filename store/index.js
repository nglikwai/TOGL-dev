export const state = () => ({
    pageScale: 1
})

//getters
export const getters = {
}
//actions
export const actions = {
    changePageScale({ commit }, size) {
        commit("updatepageScale", size)
        return size
    },

}
//mutations
export const mutations = {
    updatepageScale(state, size) {
        state.pageScale = size
    }
}