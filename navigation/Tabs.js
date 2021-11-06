import React from "react";
import { View, Text, Platform } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { pryColor } from "../utils/color";
import Home from "../screens/main/home/Home";
import FundAmountEntered from "../screens/main/fundAccount/FundAmountEntered";
import FundMainView from "../screens/main/fundAccount/FundMainView";
import TransactionMainView from "../screens/main/Transactions/TransactionMainView";
import MyCardMainView from "../screens/main/myCard/MyCardMainView";
import CardDetailsInputView from "../screens/main/myCard/CardDetailsInputView";
import MyCardOTPcodeView from "../screens/main/myCard/MyCardOTPcodeView";

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Home!</Text>
        </View>
    );
}

function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: pryColor,
                // tabBarInactiveTintColor: '#444',
                tabBarLabelStyle: {
                    fontSize: 12,
                    // fontWeight: "bold",
                },
                tabBarStyle: { height: 60, paddingTop: 7, paddingBottom: 8 },
                tabBarIcon: { marginTop: 60 },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) =>
                        Platform.OS === "ios" ? (
                            <Ionicons
                                name="ios-home-sharp"
                                color={color}
                                size={size}
                            />
                        ) : (
                            <Ionicons
                                name="md-home-sharp"
                                color={color}
                                size={size}
                            />
                        ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Fund"
                component={FundMainView}
                options={{
                    tabBarLabel: "Fund",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="plus" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Transactions"
                component={TransactionMainView}
                options={{
                    tabBarLabel: "Transactions",
                    tabBarIcon: ({ color, size }) =>
                        Platform.OS === "ios" ? (
                            <Ionicons
                                name="ios-swap-horizontal-sharp"
                                color={color}
                                size={size}
                            />
                        ) : (
                            <Ionicons
                                name="md-swap-horizontal-sharp"
                                color={color}
                                size={size}
                            />
                        ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="My Card"
                component={MyCardMainView}
                options={{
                    tabBarLabel: "My Card",
                    tabBarIcon: ({ color, size }) =>
                        Platform.OS === "ios" ? (
                            <Ionicons
                                name="ios-card-outline"
                                color={color}
                                size={size}
                            />
                        ) : (
                            <Ionicons
                                name="md-card-outline"
                                color={color}
                                size={size}
                            />
                        ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;
