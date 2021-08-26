import React, { Component } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import iconSmall from "../assets/image/iconSmall.png";
import logoBig from "../assets/image/logoBig.png";
import FormInput from "../components/input/FormInput";
import { pryColor, white } from "../utils/color";
import PButton from "../components/button/pryButton/PButton";
import FacebookIcon from "../assets/image/FacebookIcon";
import GoogleIcon from "../assets/image/GoogleIcon";

const Login = () => {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, marginHorizontal: 20 }}>
            <View style={[styles.container]}>
                <View
                    style={{
                        // height: "15%",
                        marginTop: 50,
                        alignItems: "center",
                        // justifyContent: "flex-end",
                    }}
                >
                    <Image source={logoBig} />
                </View>
                <View
                    style={{
                        // height: "30%",
                        alignItems: "center",
                        marginVertical: 20,
                        // borderWidth: 1,
                        // justifyContent: "space-evenly",
                    }}
                >
                    <Image source={iconSmall} />
                    <View style={{ marginVertical: 20 }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "100",
                                textAlign: "center",
                            }}
                        >
                            Welcome Back!
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "700",
                                textAlign: "center",
                            }}
                        >
                            Login to continue
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: "100%",
                        height: "55%",
                        alignItems: "center",
                        // justifyContent: "space-around",
                    }}
                >
                    <View style={styles.form}>
                        <FormInput name="Username" />
                    </View>
                    <View>
                        <FormInput name="Password" />
                    </View>

                    <View style={{ width: "100%", marginTop: 10 }}>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    color: pryColor,
                                    fontSize: 12,
                                    textAlign: "right",
                                }}
                            >
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ marginTop: 30 }}>
                        <PButton name="Login" />
                    </TouchableOpacity>
                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                            marginTop: 30,
                        }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={[styles.iconConatainer]}>
                                <FacebookIcon />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.iconConatainer,
                                    { marginLeft: 40 },
                                ]}
                            >
                                <GoogleIcon />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                marginTop: 20,
                                flexDirection: "row",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 12,
                                }}
                            >
                                Don’t have an account yet?
                            </Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, color: pryColor }}>
                                    {"  Sign Up"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    iconConatainer: {
        width: 54,
        height: 54,
        borderRadius: 54 / 2,
        backgroundColor: white,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    form: {
        width: "100%",
        marginBottom: 10,
    },
});

export default Login;
