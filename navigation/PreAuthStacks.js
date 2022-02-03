import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/onboarding/Onboarding";
import SignUp from "../screens/signup/SignUp";
import SignUpAuthSetUp from "../screens/signup/SignUpAuthSetUp";
import SignUpBio from "../screens/signup/SignUpBio";
import SignUpCreatePin from "../screens/signup/SignUpCreatePin";
import SignUpOTP from "../screens/signup/SignUpOTP";
import Login from "../screens/Login";
import LoginSignUp from "../screens/LoginSignUp";
import OnboardPage from "../components/OnboardPage";
import Success from "../components/Success";

const Stack = createStackNavigator();
const PreAuthStacks = (props) => {
    return (
        <Stack.Navigator initialRouteName={props.routeState}>
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
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    drawerLockMode: "locked-closed",
                    gestureEnabled: false,
                    swipeEnabled: false,
                }}
            />
            <Stack.Screen
                name="LoginSignUp"
                component={LoginSignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OnboardPage"
                component={OnboardPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Success"
                component={Success}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default PreAuthStacks;
