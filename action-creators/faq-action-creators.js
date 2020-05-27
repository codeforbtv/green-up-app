import * as types from "../constants/action-types";
import * as firebaseDataLayer from "../data-sources/firebase-data-layer";
import FAQ from "../models/faqs";

export const readFaqs = (faq: FAQ): ThunkType => {

    function thunk(dispatch: Dispatch<ActionType>) {
        const _faq = Object.assign({}, faq, { read: true });
        dispatch({ type: types.READ_FAQS_SUCCESS, data: faq });

        firebaseDataLayer
            .updateFaqs(faq)
            .catch((error: Error) => {
                // eslint-disable-next-line no-console
                console.error(error);
                dispatch({ type: types.READ_FAQS_FAIL, data: faq });
            });
    }

    thunk.interceptOnOffline = true;
    return thunk;
};

e

export const readFaqsSuccess = (data: Object): Object => ({ type: types.READ_FAQS_SUCCESS, data });
