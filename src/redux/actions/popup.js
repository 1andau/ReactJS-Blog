export const addBlogToCart = (blogObj) => ({
    type: 'ADD_BLOG_CART', 
    payload: blogObj,
    }); 

    export const clearFavorites = () => ({
        type: 'CLEAR_CART_FAVORITES', 
        });
    