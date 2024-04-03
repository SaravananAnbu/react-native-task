import { Alert } from "react-native";
import API from "./api";

export function getAllProducts({ page, limit}) {
    return (dispatch) => {
        return API.get(`/products?skip=${page*limit}&limit=${limit}`).then(
            (res) => {
                if(res.status === 200) {
                    dispatch({ type: "SET_PRODUCTS", products: res.data.products })
                }
            }
        ).catch(err => console.log(err, "Err"))
    }
};

export function getProduct(productId) {
    return (dispatch) => {
        return API.get(`/products/${productId}`).then(
            (res) => {
                if(res.status === 200) {
                    dispatch({ type: "SET_PRODUCT", product: res.data })
                }
            }
        ).catch(err => console.log(err, "Err"))
    }
};

export function searchProducts(searchString) {
    return (dispatch) => {
        return API.get(`/products/search?q=${searchString}`).then(
            (res) => {
                console.log
                if(res.status === 200) {
                    dispatch({ type: "SEARCH_PRODUCTS", products: res.data.products })
                }
            }
        ).catch(err => console.log(err, "Err"))
    }
};

export function clearProducts() {
    return dispatch => {
        dispatch({ type: "CLEAR_PRODUCTS", products: [] })
    }
}

export function addProduct(data) {
    return dispatch => {
        return API.post("/products/add", data).then(
            (res) => {
                if(res.status === 200) {
                    Alert.alert("Product added")
                }
            }
        )
    }
}