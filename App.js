import React from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoadApp from "./screens/LoadApp";
import Onboarding from "./screens/onboarding/Onboarding";
import LoginSignUp from "./screens/LoginSignUp";
import Login from "./screens/Login";
import { pryColor } from "./utils/color";

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
    return (
        <View style={styles.container}>
            <MegaStatusBar backgroundColor={pryColor} style="light" />
            <Login />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
