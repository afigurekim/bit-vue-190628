import { combineReducers } from 'redux'
import todo from './todoReducer'

const todoApp = combineReducers(
    {
        todo: todo
    }
)

export default todoApp