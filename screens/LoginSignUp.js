import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import iconBig from "../assets/image/iconBig.jpg";
import logoBig from "../assets/image/logoBig.jpg";
import PButton from "../components/button/pryButton/PButton";
import SButton from "../components/button/secButton/SButton";

const LoginSignUp = () => {
    return (
        <View style={styles.container}>
            <View style={{ height: "25%", justifyContent: "center" }}>
                <Image source={logoBig} />
            </View>
            <View style={{ height: "25%", justifyContent: "center" }}>
                <View style={{ backgroundColor: "black" }}>
                    <Image source={iconBig} />
                </View>
            </View>
            <View
                style={{
                    height: "50%",
                    justifyContent: "center",
                }}
            >
                <TouchableOpacity style={[styles.btn]}>
                    <PButton name={"Login"} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom: 60}}>
                    <SButton name={"Sign Up"} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    },
    btn: {
        marginBottom: 20,
    },
});

export default LoginSignUp;
