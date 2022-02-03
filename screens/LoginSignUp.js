import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import iconBig from "../assets/image/iconBig.png";
import logoBig from "../assets/image/logoBig.png";
import PButton from "../components/button/pryButton/PButton";
import SButton from "../components/button/secButton/SButton";
import { useNavigation } from "@react-navigation/native";

const LoginSignUp = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: "50%",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <Image style={{ marginTop: 60 }} source={logoBig} />
                <Image source={iconBig} />
            </View>
            <View
                style={{
                    height: "50%",
                    justifyContent: "center",
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                    style={[styles.btn]}
                >
                    <PButton name={"Login"} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignUp")}
                    style={{ marginBottom: 60 }}
                >
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
