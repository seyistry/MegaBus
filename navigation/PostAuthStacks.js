import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";

import FundAmountEntered from "../screens/main/fundAccount/FundAmountEntered";
import CardDetailsInputView from "../screens/main/myCard/CardDetailsInputView";
import MyCardOTPcodeView from "../screens/main/myCard/MyCardOTPcodeView";
import Success from "../components/Success";
import ScanToPayMainView from "../screens/main/scanToPay/ScanToPayMainView";
import Scan from "../screens/main/scanToPay/Scan";
import ShareFundsMainView from "../screens/main/shareFunds/ShareFundsMainView";
import LoadTransitCard from "../screens/main/loadTransitCard/LoadTransitCard";
import CheckOut from "../screens/main/checkOut/CheckOut";
import Profile from "../screens/settingScreens/Profile";
import CustomerService from "../screens/settingScreens/CustomerService";
import Settings from "../screens/settingScreens/Settings";
import ChangePass from "../screens/settingScreens/ChangePass";
import ChangePin from "../screens/settingScreens/ChangePin";

const Stack = createStackNavigator();
const PostAuthStacks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Tabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FundAmountEntered"
                component={FundAmountEntered}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CardDetailsInputView"
                component={CardDetailsInputView}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MyCardOTPcodeView"
                component={MyCardOTPcodeView}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Success"
                component={Success}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ScanToPayMainView"
                component={ScanToPayMainView}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Scan"
                component={Scan}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ShareFundsMainView"
                component={ShareFundsMainView}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoadTransitCard"
                component={LoadTransitCard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CheckOut"
                component={CheckOut}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="My Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Customer Service"
                component={CustomerService}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Change Password"
                component={ChangePass}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Change Pin"
                component={ChangePin}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default PostAuthStacks;
