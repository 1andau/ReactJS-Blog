const initialState = {
  items: {},

};

const favCart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITES_TO_CART': {
      const currentGuideItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];


      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentGuideItems,
        },
      }

    
      return {
        ...state,
        items: newItems,
    
      };
    }

    case 'CLEAR_CART_FAVORITES':
      return { items: {} };



    default:
      return state;
  }
};

export default favCart;