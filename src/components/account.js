import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Login from "./login";
import Profile from "./profile";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Account = () => {
    const isAuth = useSelector(state => state.AppReducer.isAuth);
    const user = useSelector(state => state.AppReducer.user);
    const dispatch = useDispatch();

    const logout = async () => {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("user");
        dispatch({ type: "SET_CURRENT_USER", user: {}});
    }

    return (
        <View style={{ flex: 1, height: "100%" }}>
            {isAuth ? <Profile user={user} logout={logout}/> : <Login/>}
        </View>
    )
}

export default Account;