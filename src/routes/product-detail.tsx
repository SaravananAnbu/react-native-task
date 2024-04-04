import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/product";
import { getProduct } from "../actions/products";

const ProductDetail = ({ navigation, route }: any) => {
    const dispatch = useDispatch() as any;
    const product = useSelector((state: any) => state.AppReducer.product);
    useEffect(() => {
        const { productId } = route.params;
        dispatch(getProduct(productId));
    }, []);
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