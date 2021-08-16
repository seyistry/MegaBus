import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoginSignUp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>LoginSignUp</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eb8f8f",
    },
    text: {
        fontSize: 20,
        color: "white",
    },
});

export default LoginSignUp;
