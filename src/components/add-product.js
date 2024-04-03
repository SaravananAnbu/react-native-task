import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/products';

const AddProductForm = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        discountPercentage: '',
        rating: '',
        stock: '',
        brand: '',
        category: '',
        thumbnail: '',
        images: []
    });

    const dispatch = useDispatch();

    const handleChange = (field, value) => {
        setProduct({ ...product, [field]: value });
    };

    const handleSubmit = () => {
        dispatch(addProduct(product));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Title"
                value={product.title}
                onChangeText={(text) => handleChange('title', text)}
                onSubmitEditing={() => { descriptionInput.focus()}}
                placeholderTextColor="#777"
                returnKeyType="next"
                
            />
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Description"
                value={product.description}
                onChangeText={(text) => handleChange('description', text)}
                placeholderTextColor="#777"
                ref={(input) => descriptionInput = input}
                onSubmitEditing={() => { priceInput.focus()}}
                multiline={true}
                numberOfLines={4}
            />
            <Text style={styles.label}>Price</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Price"
                value={product.price}
                onChangeText={(text) => handleChange('price', text)}
                ref={(input) => priceInput = input}
                onSubmitEditing={() => { discountPercentageInput.focus()}}
                placeholderTextColor="#777"
                keyboardType="numeric"
            />
            <Text style={styles.label}>Discount Percentage</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Discount Percentage"
                value={product.discountPercentage}
                onChangeText={(text) => handleChange('discountPercentage', text)}
                ref={(input) => discountPercentageInput = input}
                onSubmitEditing={() => { ratingInput.focus()}}
                placeholderTextColor="#777"
                keyboardType="numeric"
            />
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: "space-between"}}>
                <View style={{ flex: 1, marginRight: 5 }}>
                    <Text style={styles.label}>Rating</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Rating"
                        value={product.rating}
                        onChangeText={(text) => handleChange('rating', text)}
                        onSubmitEditing={() => { stockInput.focus()}}
                        ref={(input) => ratingInput = input}
                        placeholderTextColor="#777"
                        keyboardType="numeric"
                    />
                </View>
                <View style={{ flex: 1, marginLeft: 5 }}>
                    <Text style={styles.label}>Stock</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Stock"
                        value={product.stock}
                        onChangeText={(text) => handleChange('stock', text)}
                        onSubmitEditing={() => { brandInput.focus()}}
                        ref={(input) => stockInput = input}
                        placeholderTextColor="#777"
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <Text style={styles.label}>Brand</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Brand"
                value={product.brand}
                onChangeText={(text) => handleChange('brand', text)}
                onSubmitEditing={() => { categoryInput.focus()}}
                ref={(input) => brandInput = input}
                placeholderTextColor="#777"
            />
            <Text style={styles.label}>Category</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Category"
                value={product.category}
                onChangeText={(text) => handleChange('category', text)}
                onSubmitEditing={() => { thumbnailInput.focus()}}
                ref={(input) => categoryInput = input}
                placeholderTextColor="#777"
            />
            <Text style={styles.label}>Thumbnail URL</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Thumbnail URL"
                value={product.thumbnail}
                onChangeText={(text) => handleChange('thumbnail', text)}
                onSubmitEditing={() => { imagesInput.focus()}}
                ref={(input) => thumbnailInput = input}
                placeholderTextColor="#777"
            />
            <Text style={styles.label}>Image URLs (Comma separated)</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Image URLs (comma separated)"
                value={product.images.join(',')}
                onChangeText={(text) => handleChange('images', text.split(','))}
                placeholderTextColor="#777"
                ref={(input) => imagesInput = input}
                multiline={true}
                numberOfLines={2}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    label: {
        fontSize: 15,
        marginTop: 15,
        marginBottom: 5,
        color: "#777"
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color: "#000",
        fontWeight: "700"
    },
});

export default AddProductForm;