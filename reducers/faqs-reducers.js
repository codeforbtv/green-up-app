// @flow
import initialState from "./initial-state";
import * as types from "../constants/action-types";

export const faqsReducers = (state: Object = initialState.faqs, action: ActionType): Object => {
    switch (action.type) {
        case types.FETCH_FAQS_SUCCESS :
            return {
                ...state,
                data: action.data, error: null
            };
        case types.FETCH_FAQS_FAIL :
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
