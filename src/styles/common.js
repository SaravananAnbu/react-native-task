import { StyleSheet } from "react-native";

const allStyles = StyleSheet.create({
    btn: {
        marginTop: 25,
        backgroundColor: "#00246B",
        paddingVertical: 10,
        width: "100%",
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
});

export default allStyles;