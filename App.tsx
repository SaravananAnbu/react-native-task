/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/routes/home';
import Search from './src/routes/search';
import Account from './src/routes/account';
import ProductDetail from './src/routes/product-detail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddProductForm from './src/routes/add-product';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
    return (
        <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen
                component={Home}
                name="HomePage"
                options={() => ({
                    headerShown: false,
                    gestureEnabled: false
                })}
            />
            <Stack.Screen
                component={ProductDetail}
                options={({ route }: any) => ({
                    title: route.params.productName
                })}
                name="Product"
            />
            <Stack.Screen
                component={AddProductForm}
                name="AddProduct"
            />
        </Stack.Navigator>
    )
}

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1
    };

    const setCurrentUser = async () => {
        let user = await AsyncStorage.getItem("user");
        if(user) {
            store.dispatch({ type: "SET_CURRENT_USER",  user: JSON.parse(user)})
        }
    }

    useEffect(() => {
        setCurrentUser();
    }, [])

    return (
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <SafeAreaView style={backgroundStyle}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                    <NavigationContainer>
                        <Tab.Navigator
                            initialRouteName="Home" 
                            backBehavior="history"
                            screenOptions={({ route }) => ({
                                tabBarItemStyle: {
                                    backgroundColor: "white",
                                    borderTopWidth: 0,
                                    paddingBottom: 8,
                                    borderTopColor: "transparent",
                                    justifyContent: "center",
                                    alignItems: "center",
                                },
                                tabBarStyle: {
                                    height: 70,
                                    paddingTop: 10,
                                },
                                tabBarLabelStyle: {
                                    fontSize: 14
                                },
                                tabBarIcon: ({ focused, color, size }) => {
                                    let iconName;
                                    // Render AntIcons
                                    if (route.name === ('Home')) {
                                        iconName = 'H';
                                    } else if (route.name === 'Search') {
                                        iconName = 'S';
                                    } else if (route.name === 'Account') {
                                        iconName = 'A';
                                    }
                        
                                    return <Text style={[styles.icon, { color: color,  borderColor: color }]}>{iconName}</Text>;
                                },
                            })}      
                                
                        >
                            <Tab.Screen 
                                name='Home' 
                                options={{
                                    headerShown: false,
                                    unmountOnBlur: false
                                }}
                                // component={Home}
                            >
                                {(props: any) => <HomeScreen {...props}/>}
                            </Tab.Screen>
                            <Tab.Screen name='Search' component={Search} options={{ unmountOnBlur: true, headerShown: false }}></Tab.Screen>
                            <Tab.Screen name='Account' component={Account}></Tab.Screen>
                        </Tab.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            </Provider>
        </I18nextProvider>
    );
}


const styles = StyleSheet.create({
    icon: {
        fontWeight: "900", fontSize: 18, borderWidth: 2, borderRadius: 10, paddingTop: 3, paddingBottom: 5, paddingLeft: 12, paddingRight: 8,
    }
})


export default App;
