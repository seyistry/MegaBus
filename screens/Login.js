import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    Modal,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import { BlurView } from "expo-blur";
import iconSmall from "../assets/image/iconSmall.png";
import logoBig from "../assets/image/logoBig.png";
import FormInput from "../components/input/FormInput";
import { labelgray, pryColor, white } from "../utils/color";
import PButton from "../components/button/pryButton/PButton";
import FacebookIcon from "../assets/image/FacebookIcon";
import GoogleIcon from "../assets/image/GoogleIcon";
import { useForm, Controller } from "react-hook-form";
import Goto from "../navigation/Goto";
import { auth } from "../firebase/firebase.utils";
import { FIREBASE_clientId } from "@env";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: FIREBASE_clientId,
    });
    React.useEffect(() => {
        if (response?.type === "success") {
            const { id_token } = response.params;
            // const provider = new GoogleAuthProvider();
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential);
        }
    }, [response]);

    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const handlePress = () => {
        return Goto({
            direction: "Main",
            Screen: "Home",
        });
    };
    const handleSignUpPress = () => {
        return Goto({
            direction: "SignUp",
        });
    };

    const onChange = (arg) => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    return (
        <ScrollView contentContainerStyle={{ flex: 1, marginHorizontal: 20 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <BlurView
                    intensity={100}
                    tint="dark"
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator size="large" color={pryColor} />
                </BlurView>
            </Modal>
            <View style={[styles.container]}>
                <View
                    style={{
                        marginTop: 50,
                        alignItems: "center",
                    }}
                >
                    <Image source={logoBig} />
                </View>
                <View
                    style={{
                        alignItems: "center",
                        marginVertical: 20,
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
                <View style={{ flex: 1 }}>
                    <View>
                        <Text style={styles.text}>Username</Text>
                        <Controller
                            defaultValue=""
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <FormInput
                                    errorText={errors?.Username?.message}
                                    minLength={6}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    name="Username"
                                />
                            )}
                            name="Username"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Username is required",
                                },
                                maxLength: 14,
                                minLength: {
                                    value: 6,
                                    message: "Minimum of 6 digits",
                                },
                                message: "Username is required",
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.text}>Password</Text>
                        <Controller
                            defaultValue=""
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <FormInput
                                    errorText={errors?.Password?.message}
                                    minLength={6}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    name="Password"
                                />
                            )}
                            name="Password"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                                maxLength: 14,
                                minLength: {
                                    value: 6,
                                    message: "Minimum of 6 digits",
                                },
                                message: "Password is required",
                            }}
                        />
                    </View>

                    <View style={{ marginTop: 10 }}>
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
                    <TouchableOpacity
                        onPress={handleSubmit(handlePress())}
                        style={{ marginTop: 30, alignItems: "center" }}
                    >
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
                                disabled={!request}
                                onPress={() => {
                                    promptAsync();
                                    setModalVisible(true);
                                }}
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
                            <TouchableOpacity onPress={handleSignUpPress()}>
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
    },
    text: {
        fontFamily: "HeeboR",
        fontSize: 12,
        color: labelgray,
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
        // width: "100%",
        marginBottom: 10,
    },
});

export default Login;
