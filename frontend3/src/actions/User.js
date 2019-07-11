import fetchJsonp from 'fetch-jsonp';
import { replace } from 'replace-router-redux';

const API_URL = 'https://api.github.com/user';
const startRequest = user => ({
    type: 'START_REQUEST',
    payload: {user}
})

const receiveData = (user, error, response) => ({
    type: 'RECEIVE_DATA',
    payload: {user, error, response}
})

const finishRequest = user => ({
    type: 'FINISH_REQUEST',
    payload: { user }
})

export const fetchUser = user => {
    return async (dispatch, getState) => {
        dispatchEvent(startRequest(user))
        try{
            const response = await fetchJsonp(`${API_URL}/${user}/repos`)
            const data = await response.json()
            dispatchEvent(receiveData(user, null, data));
        }catch(e){
            dispatchEvent(receiveData(user, e));
        }
        dispatchEvent(finishRequest(user))
    }
}