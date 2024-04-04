const defaultState = {
    products: [],
    searchProducts: [],
    product: null,
    user: {},
    isAuth: false
}

const AppReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        // Set Current user based on Auth
        case 'SET_CURRENT_USER':
            return Object.assign({}, state, {
                user: action.user,
                isAuth: Object.keys(action.user).length > 0 ? true : false
            })
        
        
        // Set Products
        case 'SET_PRODUCTS': 
            return Object.assign({}, state, {
                products: state.products.concat(action.products)
            });

        // Clear Products
        case 'CLEAR_PRODUCTS': 
            return Object.assign({}, state, {
                products: []
            });
        
        // Set Product
        case 'SET_PRODUCT': 
            return Object.assign({}, state, {
                product: action.product
            });
            
        // Set Product
        case 'SEARCH_PRODUCTS': 
            return Object.assign({}, state, {
                searchProducts: action.products
            });
            
        default:
            return state;
    }
}

export default AppReducer;