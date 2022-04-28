 
const initialState = {
    items: [],
isLoaded: false, 
};


const gallery = (state = initialState, action) =>{
switch (action.type) {
    case 'SET_GALLERY':
        return{
            ...state,
            items: action.payload,
            isLoaded: true ,
        };

        case 'SET_LOADED_GALLERY':
            return{
                ...state,
                isLoaded: action.payload, 
            };

    default:
        return state
}
};


export default gallery;


