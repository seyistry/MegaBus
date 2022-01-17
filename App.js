import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import * as ScreenOrientation from "expo-screen-orientation";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import Stacks from "./navigation/Stacks";
import Drawers from "./navigation/Drawers";
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
    const [loaded] = useFonts({
        HeeboXb: require("./assets/fonts/Heebo-ExtraBold.ttf"),
        HeeboR: require("./assets/fonts/Heebo-Regular.ttf"),
        HeeboM: require("./assets/fonts/Heebo-Medium.ttf"),
        HeeboB: require("./assets/fonts/Heebo-Bold.ttf"),
    });

    useEffect(() => {
        lockOrientation();
    }, []);

    const lockOrientation = async () => {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
        );
    };

    if (!loaded) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                <MegaStatusBar backgroundColor={pryColor} style="light" />
                <NavigationContainer>
                    <Drawers />
                </NavigationContainer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
