import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import * as ScreenOrientation from "expo-screen-orientation";
import { StyleSheet, View, SafeAreaView, LogBox } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Drawers from "./navigation/Drawers";
import { pryColor } from "./utils/color";
import LoadApp from "./screens/LoadApp";
import { auth } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import PreAuthStacks from "./navigation/PreAuthStacks";

LogBox.ignoreLogs([
    "AsyncStorage has been extracted from react-native core and will be removed in a future release",
]);

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

let customFonts = {
    HeeboXb: require("./assets/fonts/Heebo-ExtraBold.ttf"),
    HeeboR: require("./assets/fonts/Heebo-Regular.ttf"),
    HeeboM: require("./assets/fonts/Heebo-Medium.ttf"),
    HeeboB: require("./assets/fonts/Heebo-Bold.ttf"),
};

export default function App() {
    const [routeState, setRouteState] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    async function loadFontsAsync() {
        await Font.loadAsync(customFonts);
        await setTimeout(() => {
            setFontsLoaded(true);
        }, 1000);
    }

    useEffect(() => {
        lockOrientation();
        loadFontsAsync();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(currentUser);
            if (currentUser) {
                setRouteState(true);
            } else if (!user && !routeState) {
            } else {
                setRouteState(true);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [currentUser, fontsLoaded, setRouteState]);

    const lockOrientation = async () => {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
        );
    };

    if (!fontsLoaded) {
        return (
            <>
                <MegaStatusBar backgroundColor={pryColor} style="light" />
                <LoadApp />
            </>
        );
    } else {
        return (
            <View style={styles.container}>
                <MegaStatusBar backgroundColor={pryColor} style="light" />
                <NavigationContainer>
                    {currentUser ? (
                        <Drawers />
                    ) : (
                        <PreAuthStacks
                            routeState={routeState ? "Login" : "Onboarding"}
                        />
                    )}
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
