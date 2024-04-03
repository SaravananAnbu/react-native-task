import { useEffect } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearProducts, searchProducts } from "../actions/products";
import Product from "./product";

function debounce(func, waitTime) {
    let timeout;
    return (arg) => {
        if(timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {func(arg)}, waitTime);
    }
}

const Search = ({ navigation }) => {
    const products = useSelector(state => state.AppReducer.searchProducts);
    const dispatch = useDispatch();
    // const handleChange = (text) => {
    //     // setSearchString(text);
    //     searchProducts(text)
    // }
    const handleChange = debounce((str) => {
        dispatch(searchProducts(str))
    }, 1000);

    const viewProduct = (productId) => {
        navigation.navigate("Product", { productId: productId })
    }

    useEffect(() => {
        // dispatch(clearProducts());
    }, []);

    return (
        <View style={{ paddingBottom: 150 }}>
            <View style={{ alignItems: "center",}}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => handleChange(text) }
                    keyboardType="web-search"
                    placeholder="Search Products"
                    placeholderTextColor="#777"
                />
            </View>
            <View>
                {products?.length > 0 && 
                    <FlatList
                        data={products}
                        renderItem={({ item, index }) => (
                            <Product 
                                item={item} 
                                isProductDetail={false}
                                viewProduct={viewProduct}
                            />
                        )}
                        keyExtractor={(item, i) => i}
                        contentContainerStyle={{ flexDirection: "column" }}
                        onEndReachedThreshold={0.8}
                    />
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        width: "90%",
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#ddd",
        height: 45,
        color: "#000"
    }
})

export default Search;