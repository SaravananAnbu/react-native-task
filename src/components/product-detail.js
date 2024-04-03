import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Product from "./product";
import { getProduct } from "../actions/products";

const ProductDetail = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.AppReducer.product);
    useEffect(() => {
        const { productId } = route.params;
        dispatch(getProduct(productId));
    }, []);
    console.log(product, "PPP")
    return (
        <View style={{ flex: 1 }}>
            {product && 
                <Product 
                    item={product}
                    viewProduct={() => {}}
                    isProductDetail={true}
                />
            }
        </View>
    )
}

export default ProductDetail;