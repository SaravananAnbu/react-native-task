import { useEffect } from "react";
import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchProducts, searchProducts } from "../actions/products";
import Product from "../components/product";
import allStyles from "../styles/common";
import { useState } from "react";

function debounce(func: any, waitTime: number) {
    let timeout: any;
    return (arg: string) => {
        if(timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {func(arg)}, waitTime);
    }
}

const Search = ({ navigation }: any) => {
    const [searchString, setSearchString] = useState("");
    const products = useSelector((state: any) => state.AppReducer.searchProducts);
    const dispatch = useDispatch() as any;
    // const handleChange = (text) => {
    //     // setSearchString(text);
    //     searchProducts(text)
    // }
    const handleChange = debounce((str: string) => {
        dispatch(searchProducts(str))
    }, 1000);

    const viewProduct = (productId: number) => {
        navigation.navigate("Product", { productId: productId })
    }

    useEffect(() => {
        // dispatch(clearProducts());
    }, []);

    const clearAll = () => {
        setSearchString("");
        dispatch(clearSearchProducts());
    }

    return (
        <View style={{ paddingBottom: 150 }}>
            <View style={{ alignItems: "center",flexDirection:"row", justifyContent: "space-evenly"}}>
                <TextInput
                    style={[allStyles.textInput, { fontSize: 18, height: 55, width: "78%" }]}
                    onChangeText={(text) => {
                        handleChange(text);
                        setSearchString(text);
                    }}
                    value={searchString}
                    keyboardType="web-search"
                    placeholder="Search Products"
                    placeholderTextColor="#777"
                />
                <Pressable onPress={clearAll} style={[allStyles.btn, {width: "13%", height: 50, borderRadius: 5, paddingVertical: 0, paddingBottom: 5, justifyContent: "center", alignItems: "center" }]}><Text style={[allStyles.btnTxt, { fontSize: 25}]}>x</Text></Pressable>
            </View>
            <View>
                {products?.length > 0 ? 
                    <FlatList
                        data={products}
                        renderItem={({ item, index }) => (
                            <Product 
                                item={item} 
                                isProductDetail={false}
                                viewProduct={viewProduct}
                            />
                        )}
                        keyExtractor={(item, i) => i.toString()}
                        contentContainerStyle={{ flexDirection: "column" }}
                        onEndReachedThreshold={0.8}
                    /> : <Text style={[allStyles.label, { textAlign: "center"}]}>No results found</Text>
                }
            </View>
        </View>
    )
}

export default Search;