import { useEffect } from "react";
import { ActivityIndicator, Alert, Dimensions, FlatList, Image, Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearProducts, getAllProducts } from "../actions/products";
import Product from "./product";
import { useState } from "react";

const Home = ({ navigation }) => {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(5);
    const [selfRefresh, setSelfRefresh] = useState(false);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const products = useSelector(state => state.AppReducer.products);
    const isAuth = useSelector(state => state.AppReducer.isAuth);

    useEffect(() => {
        dispatch(getAllProducts({ page, limit }));
    }, [page]);

    useEffect(() => {
        setLoading(false);
    }, [products])

    const viewProduct = (productId) => {
        navigation.navigate("Product", { productId: productId })
    }

    const loadMore = () => {
        setPage(page+1);
        setLoading(true);
    }

    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 15, borderBottomColor: "#777", borderBottomWidth: 0.5 }}>
                <Text style={[styles.btnTxt, { color: "#000", fontSize: 19 }]}>All Products</Text>
                <Pressable style={[styles.btn, { opacity: isAuth ? 1 : 0.5 }]} onPress={() => navigation.navigate("AddProduct")} disabled={!isAuth}>
                    <Text style={styles.btnTxt}>Add Product</Text>
                </Pressable>
            </View>
            <FlatList
                data={products}
                ListEmptyComponent={() => {
                    return (
                        <View>
                            {(!selfRefresh && !loading) &&
                                <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', paddingTop: 50 }}>
                                    <Text style={{ textAlign: 'center', color: "#555", fontSize: 16 }}>No Data Found</Text>
                                </View>
                            }
                        </View>
                    )
                }}
                ListFooterComponent={() => {
                    if (loading) {
                        return (
                            <View style={{ paddingVertical: 40 }}>
                                <ActivityIndicator color="#F9D379" animating size="large" />
                            </View>
                        );
                    } else {
                        return null;
                    }
                }}
                renderItem={({ item, index }) => (
                    <Product 
                        item={item} 
                        isProductDetail={false}
                        viewProduct={viewProduct}
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={selfRefresh}
                        onRefresh={() => {
                            setLoading(true);
                            dispatch(clearProducts());
                            dispatch(getAllProducts({ page: 0, limit: 5 }));
                        }}
                        title={'Loading...'}
                        tintColor="#fff"
                        colors={["#684DB8"]}
                    />
                }
                keyExtractor={(item, i) => i}
                contentContainerStyle={{ flexDirection: "column" }}
                onEndReachedThreshold={0.8}
                onEndReached={loadMore}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 25,
        backgroundColor: "#00246B",
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: "#00246B",
        opacity: 0.8,
        borderWidth: 2,
        shadowColor: "#f8faff",
        shadowOffset: {
          width: 10,
          height: 5
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 1,
    },
    btnTxt: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "900",
        textAlign: "center",
    },
})

export default Home;