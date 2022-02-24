import summit from '../content/summit.json';
import { START_LOADING, STOP_LOADING, LOGOUT_USER, SET_LOGGED_USER } from "openstack-uicore-foundation/lib/actions";
import {RESET_STATE, SYNC_DATA} from "../actions/base-actions";

const DEFAULT_STATE = {
    loading: false,
    summit,
}

const summitReducer = (state = DEFAULT_STATE, action) => {
    const { type } = action

    switch (type) {
        case SET_LOGGED_USER:
        case RESET_STATE:
        case SYNC_DATA:
        case LOGOUT_USER: {
            return DEFAULT_STATE;
        }
        case START_LOADING:
            return { ...state, loading: true };
        case STOP_LOADING:
            return { ...state, loading: false };
        default:
            return state;
    }
}

export default summitReducer