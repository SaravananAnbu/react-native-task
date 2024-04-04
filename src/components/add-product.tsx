import React, { useRef, useState } from 'react';
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

    const dispatch = useDispatch() as any;

    const handleChange = (field: string, value: string | number) => {
        setProduct({ ...product, [field]: value });
    };

    const handleSubmit = () => {
        dispatch(addProduct(product));
    };

    const descriptionInput = useRef<TextInput>(null);
    const priceInput = useRef<TextInput>(null);
    const discountPercentageInput = useRef<TextInput>(null);
    const ratingInput = useRef<TextInput>(null);
    const stockInput = useRef<TextInput>(null);
    const brandInput = useRef<TextInput>(null);
    const categoryInput = useRef<TextInput>(null);
    const thumbnailInput = useRef<TextInput>(null);
    const imagesInput = useRef<TextInput>(null);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={allStyles.label}>Title</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Title"
                value={product.title}
                onChangeText={(text) => handleChange('title', text)}
                onSubmitEditing={() => { descriptionInput.current?.focus()}}
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
                ref={descriptionInput}
                onSubmitEditing={() => priceInput.current?.focus()}
                multiline={true}
                numberOfLines={4}
            />
            <Text style={allStyles.label}>Price</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Price"
                value={product.price}
                onChangeText={(text) => handleChange('price', text)}
                ref={priceInput}
                onSubmitEditing={() => discountPercentageInput.current?.focus()}
                placeholderTextColor="#777"
                keyboardType="numeric"
            />
            <Text style={allStyles.label}>Discount Percentage</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Discount Percentage"
                value={product.discountPercentage}
                onChangeText={(text) => handleChange('discountPercentage', text)}
                ref={discountPercentageInput}
                onSubmitEditing={() => ratingInput.current?.focus()}
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
                        onSubmitEditing={() => stockInput.current?.focus()}
                        ref={ratingInput}
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
                        onSubmitEditing={() => brandInput.current?.focus()}
                        ref={stockInput}
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
                onSubmitEditing={() => categoryInput.current?.focus()}
                ref={brandInput}
                placeholderTextColor="#777"
            />
            <Text style={allStyles.label}>Category</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Category"
                value={product.category}
                onChangeText={(text) => handleChange('category', text)}
                onSubmitEditing={() => thumbnailInput.current?.focus()}
                ref={categoryInput}
                placeholderTextColor="#777"
            />
            <Text style={allStyles.label}>Thumbnail URL</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Thumbnail URL"
                value={product.thumbnail}
                onChangeText={(text) => handleChange('thumbnail', text)}
                onSubmitEditing={() => imagesInput.current?.focus()}
                ref={thumbnailInput}
                placeholderTextColor="#777"
            />
            <Text style={allStyles.label}>Image URLs (Comma separated)</Text>
            <TextInput
                style={allStyles.input}
                placeholder="Enter Image URLs (comma separated)"
                value={product.images.join(',')}
                onChangeText={(text) => handleChange('images', text)}
                placeholderTextColor="#777"
                ref={imagesInput}
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