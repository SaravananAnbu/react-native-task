import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const login = () => {
        const data = {
            username, password,
            expiresInMins: 30
        }
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
                expiresInMins: 30, // optional, defaults to 60
            })
        })
        .then(res => res.json())
        .then(async res => {
            console.log(res)
            await AsyncStorage.setItem("user", JSON.stringify(res));
            await AsyncStorage.setItem("token",res.token);
            dispatch({ type: "SET_CURRENT_USER", user: res })
        }).catch(err => console.log(err, "Err"));
    }

    return (
        <View style={{ flexDirection: "column", justifyContent: "center", height: "100%"}}>
            <View style={{ alignItems: "center"}}>
                <Text style={styles.login}>Please Login to continue</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setUsername(text) }
                    returnKeyType="next"
                    placeholder="Username"
                    placeholderTextColor="#777"
                    onSubmitEditing={() => {passportInput.focus()}}
                />
                <TextInput
                    style={styles.textInput}
                    ref={(input) => passportInput = input}
                    onChangeText={(text) => setPassword(text) }
                    keyboardType="visible-password"
                    placeholder="Password"
                    placeholderTextColor="#777"
                />
                <Pressable style={styles.btn} onPress={login}>
                    <Text style={styles.btnTxt}>LOGIN</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        fontSize: 24,
        fontWeight: "700",
        color: "#000",
        marginVertical: 20,
        letterSpacing: 1
    },
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
    },
    btn: {
        marginTop: 25,
        backgroundColor: "#00246B",
        paddingVertical: 10,
        width: "90%",
        borderRadius: 10,
        borderColor: "#00246B",
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
        fontSize: 17,
        color: "#fff",
        fontWeight: "900",
        textAlign: "center",
    },
})

export default Login;