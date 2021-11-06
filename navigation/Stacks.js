import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";

import FundAmountEntered from "../screens/main/fundAccount/FundAmountEntered";
import CardDetailsInputView from "../screens/main/myCard/CardDetailsInputView";
import MyCardOTPcodeView from "../screens/main/myCard/MyCardOTPcodeView";
import Onboarding from "../screens/onboarding/Onboarding";
import SignUp from "../screens/signup/SignUp";
import SignUpAuthSetUp from "../screens/signup/SignUpAuthSetUp";
import SignUpBio from "../screens/signup/SignUpBio";
import SignUpCreatePin from "../screens/signup/SignUpCreatePin";
import SignUpOTP from "../screens/signup/SignUpOTP";
import LoadApp from "../screens/LoadApp";
import Login from "../screens/Login";
import LoginSignUp from "../screens/LoginSignUp";
import OnboardPage from "../components/OnboardPage";
import Success from "../components/Success";

const Stack = createStackNavigator();

function Stacks() {
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
                name="Onboarding"
                component={Onboarding}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpAuthSetUp"
                component={SignUpAuthSetUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpBio"
                component={SignUpBio}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpCreatePin"
                component={SignUpCreatePin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpOTP"
                component={SignUpOTP}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoadApp"
                component={LoadApp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginSignUp"
                component={LoginSignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Success"
                component={Success}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OnboardPage"
                component={OnboardPage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default Stacks;
