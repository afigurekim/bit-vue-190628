const todoReducer = (state = {list:[]}, action) => {
    switch(action.type){
        case 'ADD_TODO':
            console.log('ADD_TODO')
            break
        default:
            return state
    }
    return state
}

export default todoReducer;