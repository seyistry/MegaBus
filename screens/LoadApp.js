import React, { useRef, useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Animated } from "react-native";
import { pryColor } from "../utils/color";
import Logo from "../assets/image/Logo";
import { auth } from "../firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const setHeight = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
        Animated.spring(setHeight, {
            toValue: 1,
            speed: 9,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,
                transform: [{ scale: setHeight }], // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
};

const LoadApp = ({ navigation }) => {
    const [routeState, setRouteState] = useState(false);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setRouteState(true);
            setTimeout(() => {
                user
                    ? navigation.navigate("Main")
                    : navigation.navigate(
                          `${routeState ? "Onboarding" : "Login"}`
                      );
            }, 1500);
        });
    }, []);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: pryColor,
            }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <FadeInView>
                    <Logo />
                </FadeInView>
            </View>
        </View>
    );
};

export default LoadApp;
