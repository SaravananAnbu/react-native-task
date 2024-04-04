import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Rating = ({ rating }: any) => {
    return (
        <View style={styles.container}>
            {[...Array(5).keys()].map((index) => (
                <Text key={index} style={Number(index) < parseInt(rating) ? styles.filledStar : styles.emptyStar}>★</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filledStar: {
        color: '#FFD700', // Color of filled stars
        fontSize: 24,
    },
    emptyStar: {
        color: '#ccc', // Color of empty stars
        fontSize: 24,
    },
});

export default Rating;