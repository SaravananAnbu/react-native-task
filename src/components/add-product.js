import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, Text, StyleSheet, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/products';
import allStyles from '../styles/common';

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
            <Text style={allStyles.label}>Title</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Title"
                value={product.title}
                onChangeText={(text) => handleChange('title', text)}
                onSubmitEditing={() => { descriptionInput.focus()}}
                placeholderTextColor="#777"
                returnKeyType="next"
                
            />
            <Text style={allStyles.label}>Description</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Description"
                value={product.description}
                onChangeText={(text) => handleChange('description', text)}
                placeholderTextColor="#777"
                ref={(input) => descriptionInput = input}
                onSubmitEditing={() => { priceInput.focus()}}
                multiline={true}
                numberOfLines={4}
            />
            <Text style={allStyles.label}>Price</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Price"
                value={product.price}
                onChangeText={(text) => handleChange('price', text)}
                ref={(input) => priceInput = input}
                onSubmitEditing={() => { discountPercentageInput.focus()}}
                placeholderTextColor="#777"
                keyboardType="numeric"
            />
            <Text style={allStyles.label}>Discount Percentage</Text>
            <TextInput
                style={allStyles.input}
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
                    <Text style={allStyles.label}>Rating</Text>
                    <TextInput
                        style={allStyles.input}
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
                    <Text style={allStyles.label}>Stock</Text>
                    <TextInput
                        style={allStyles.input}
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
            <Text style={allStyles.label}>Brand</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Brand"
                value={product.brand}
                onChangeText={(text) => handleChange('brand', text)}
                onSubmitEditing={() => { categoryInput.focus()}}
                ref={(input) => brandInput = input}
                placeholderTextColor="#777"
            />
            <Text style={allStyles.label}>Category</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Category"
                value={product.category}
                onChangeText={(text) => handleChange('category', text)}
                onSubmitEditing={() => { thumbnailInput.focus()}}
                ref={(input) => categoryInput = input}
                placeholderTextColor="#777"
            />
            <Text style={allStyles.label}>Thumbnail URL</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Thumbnail URL"
                value={product.thumbnail}
                onChangeText={(text) => handleChange('thumbnail', text)}
                onSubmitEditing={() => { imagesInput.focus()}}
                ref={(input) => thumbnailInput = input}
                placeholderTextColor="#777"
            />
            <Text style={allStyles.label}>Image URLs (Comma separated)</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Image URLs (comma separated)"
                value={product.images.join(',')}
                onChangeText={(text) => handleChange('images', text.split(','))}
                placeholderTextColor="#777"
                ref={(input) => imagesInput = input}
                multiline={true}
                numberOfLines={2}
            />
            {/* <Button style title="Submit" onPress={handleSubmit} /> */}
            <Pressable style={allStyles.btn} onPress={handleSubmit}>
                <Text style={allStyles.btnTxt}>Submit</Text>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    }
});

export default AddProductForm;