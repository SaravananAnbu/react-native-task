import { Alert } from "react-native";
import API from "./api";

export const getAllProducts = ({ page, limit }: { page: number; limit: number }) => {
    return (dispatch: any) => {
        return API.get(`/products?skip=${page * limit}&limit=${limit}`).then(
            (res: any) => {
                if (res.status === 200) {
                    dispatch({ type: "SET_PRODUCTS", products: res.data.products });
                }
            }
        ).catch(err => console.log(err, "Err"));
    };
};

export const getProduct = (productId: number) => {
    return (dispatch: any) => {
        return API.get(`/products/${productId}`).then(
            (res: any) => {
                if (res.status === 200) {
                    dispatch({ type: "SET_PRODUCT", product: res.data });
                }
            }
        ).catch(err => console.log(err, "Err"));
    };
};

export const searchProducts = (searchString: string) => {
    return (dispatch: any) => {
        return API.get(`/products/search?q=${searchString}`).then(
            (res: any) => {
                if (res.status === 200) {
                    dispatch({ type: "SEARCH_PRODUCTS", products: res.data.products });
                }
            }
        ).catch(err => console.log(err, "Err"));
    };
};

export const clearProducts = () => {
    return (dispatch: any) => {
        dispatch({ type: "CLEAR_PRODUCTS", products: [] });
    };
};

export const clearSearchProducts = () => {
    return (dispatch: any) => {
        dispatch({ type: "SEARCH_PRODUCTS", products: [] });
    };
};

export const addProduct = (data: any) => {
    return (dispatch: any) => {
        return API.post("/products/add", data).then(
            (res: any) => {
                if (res.status === 200) {
                    Alert.alert("Product added");
                }
            }
        );
    };
};