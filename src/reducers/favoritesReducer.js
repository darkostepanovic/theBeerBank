import { FAVORITE_ADD, FAVORITE_REMOVE} from '../actions/types'

const favorites = (state = [], action) => {
    switch (action.type) {
        case FAVORITE_ADD:
            return [
                ...state,
                action.payload
            ];
        case FAVORITE_REMOVE:
            const array = state;
            const index = array.indexOf(action.payload);
            if (index > -1) {
                array.splice(index, 1);
            }
            return [
                ...array
            ];
        default:
            return [
                ...state
            ]
    }
};

export default favorites