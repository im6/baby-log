export const createAction = (type, payload, error = false, meta = null) => {
    if(typeof type != 'string'){
        console.error('invalid action type');
    }

    return {
        type,
        payload,
        error,
        meta
    };
};