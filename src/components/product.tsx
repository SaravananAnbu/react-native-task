import { Image, Pressable, StyleSheet, Text, View, ScrollView, Dimensions, FlatList } from "react-native";
import Rating from "./rating";
import allStyles from "../styles/common";
import { useTranslation } from "react-i18next";

const window = Dimensions.get("window");

const Images = ({ images }: any) => {
    return (
        <FlatList
            data={images}
            horizontal
            keyExtractor={(i) => i.toString()}
            renderItem={({ item }) => (
                <Image source={{ uri: item }} style={{ width: window.width, height: "auto" }} resizeMode="contain"/>
            )}
            showsHorizontalScrollIndicator={false}
        />
    )
}

const Product = ({ item, viewProduct, isProductDetail }: any) => {
    const { t } = useTranslation();
    return (
        <View style={isProductDetail ? styles.viewProduct : styles.card}>
            <View style={{ flexDirection: "column", flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {isProductDetail ? 
                        <Images images={item.images}/>
                        :
                        <Image source={{ uri: item.thumbnail }} style={{ flex: 1, width: null, height: 175 }} resizeMode="contain"/>
                    }
                </View>
                <View style={{ flex: 1, marginTop: 15, paddingHorizontal: isProductDetail ? 20 : 0 }}>
                    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginBottom: 5}}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.brand}>{t("brand")}: {item.brand}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center"}}>
                        <Text style={styles.oldPrice}>${item.price}</Text>
                        <Text style={styles.price}> ${parseInt((item?.price/100)*(100-(item?.discountPercentage)))}</Text>
                        <Text style={styles.discount}>({item.discountPercentage}% off)</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 5}}>
                        <Rating rating={item.rating}/>
                        <Text style={styles.stock}>{t("stock")}: {item.stock}</Text>
                    </View>
                    <Text style={styles.desc}>{item.description}</Text>
                    {isProductDetail && <Text style={styles.stock}>{t("category")}: {item.category}</Text>}
                </View>
                {!isProductDetail && <Pressable style={[allStyles.btn, { backgroundColor: "#fff" }]} onPress={() => viewProduct(item.id, item.title)}>
                    <Text style={[allStyles.btnTxt, { color: allStyles.btn.backgroundColor }]}>{t("viewProduct")}</Text>
                </Pressable>}
            </View>
            {!isProductDetail &&<Text style={styles.category}>{item.category}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    viewProduct: {
        paddingVertical: 20,
        flex: 1
    },
    card: {
        width: "90%",
        marginVertical: 10,
        padding: 20,
        alignSelf: "center",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: 5,
        borderColor: "#00246B",
        borderWidth: 0.1,
        shadowColor: "#f8faff",
        shadowOffset: {
          width: 10,
          height: 5
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 1,
        marginTop: 20,
        position: "relative"
    },
    title: {
        color: "black",
        fontSize: 21,
        fontWeight: "900"
    },
    brand: {
        color: "grey"
    },
    discount: {
        color: "grey",
        marginLeft: 5
    },
    oldPrice: {
        color: "grey",
        fontWeight: "600",
        fontSize: 13,
        textDecorationLine: "line-through"
    },
    price: {
        color: "grey",
        fontWeight: "700",
        fontSize: 19
    },
    stock: {
        color: "grey",
        fontWeight: "600",
        fontSize: 17
    },
    offer: {
        color: "grey",
        fontSize: 15
    },
    desc: {
        marginTop: 5,
        color: "grey"
    },
    category: {
        position: "absolute",
        top: 0,
        left: 0,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#CADCFC",
        color: "#000",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    }
})

export default Product;