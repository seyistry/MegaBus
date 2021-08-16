import React, { useRef, useEffect } from "react";
import { Text, View, StyleSheet, Image, Animated } from "react-native";
import { pryColor } from "../utils/color";
import Logo from "../assets/image/Logo";

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

const LoadApp = () => {
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
                    <Logo strokeWidth={0.5} stroke="black" />
                </FadeInView>
            </View>
        </View>
    );
};

export default LoadApp;