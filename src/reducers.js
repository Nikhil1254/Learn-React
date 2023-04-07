export function countReducer(prevCount, action) {
    switch (action.type) {
        case "INCREMENT":
            return prevCount + action.payload;
        case "DECREMENT":
            return prevCount > 0 ? prevCount - action.payload : prevCount;
        default:
            return prevCount;
    }
}