import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = ({ user }) => {
    const { id, username, email, firstName, lastName, gender, image } = user;

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.profileImage} />
            <View style={styles.userInfo}>
                <Text style={styles.label}>Username:</Text>
                <Text style={styles.value}>{username}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{email}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>First Name:</Text>
                <Text style={styles.value}>{firstName}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Last Name:</Text>
                <Text style={styles.value}>{lastName}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.label}>Gender:</Text>
                <Text style={styles.value}>{gender}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 30,
    },
    userInfo: {
        width: "80%",
        textAlign: "left",
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: "flex-start"
    },
    label: {
        marginBottom: 5,
        color: "#777",
        fontSize: 18
    },
    value: {
        fontWeight: 'bold',
        marginBottom: 15,
        color: "#777",
        fontSize: 18
    },
});

export default Profile;