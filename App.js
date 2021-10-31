import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import * as ScreenOrientation from "expo-screen-orientation";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoadApp from "./screens/LoadApp";
import Onboarding from "./screens/onboarding/Onboarding";
import LoginSignUp from "./screens/LoginSignUp";
import Login from "./screens/Login";
import SignUp from "./screens/signup/SignUp";
import SignUpBio from "./screens/signup/SignUpBio";
import SignUpOTP from "./screens/signup/SignUpOTP";
import Tabs from "./navigation/Tabs";
import { pryColor } from "./utils/color";
import SignUpAuthSetUp from "./screens/signup/SignUpAuthSetUp";
import SignUpCreatePin from "./screens/signup/SignUpCreatePin";
import Success from "./components/Success";

function MegaStatusBar({ backgroundColor, ...props }) {
    return (
        <SafeAreaView
            style={{ backgroundColor, height: Constants.statusBarHeight }}
        >
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </SafeAreaView>
    );
}

export default function App() {
    useEffect(() => {
        lockOrientation();
    }, []);

    const lockOrientation = async () => {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
        );
    };
    return (
        <View style={styles.container}>
            <MegaStatusBar backgroundColor={pryColor} style="light" />
            <NavigationContainer>
                <Tabs />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
