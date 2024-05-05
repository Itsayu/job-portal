const initialState = {
    jobs: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_JOBS_SUCCESS':
            return {
                ...state,
                jobs: action.payload.jdList || [],
            };
        default:
            return state;
    }
};

export default rootReducer;
