import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import Login from "./login";
import Profile from "./profile";

const Account = () => {
    const isAuth = useSelector(state => state.AppReducer.isAuth);
    const user = useSelector(state => state.AppReducer.user);
    return (
        <View style={{ flex: 1, height: "100%" }}>
            {isAuth ? <Profile user={user}/> : <Login/>}
        </View>
    )
}

export default Account;