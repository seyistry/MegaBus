import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import iconSmall from "../../assets/image/iconSmall.png";
import logoBig from "../../assets/image/logoBig.png";
import FormInput from "../../components/input/FormInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { pryColor } from "../../utils/color";
import ProgressBar from "../../components/progress/ProgressBar";
import PButton from "../../components/button/pryButton/PButton";

const SignUp = () => {
    const [toggleBox, setToggleBox] = useState(false);

    const handleToggleBox = () => {
        return !toggleBox ? setToggleBox(true) : setToggleBox(false);
    };

    return (
        <ScrollView contentContainerStyle={{ flex: 1, marginHorizontal: 20 }}>
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
                        marginTop: 40,
                        alignItems: "center",
                    }}
                >
                    <Image source={iconSmall} />
                    <View>
                        <Text
                            style={{
                                marginTop: 20,
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Sign Up
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 40,
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <View style={{ width: "100%" }}>
                        <FormInput name="Mobile Number" />
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 10,
                                marginTop: 5,
                            }}
                        >
                            Provide the mobile number you would wish to receive
                            your code.
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginHorizontal: 36,
                            marginTop: 20,
                        }}
                    >
                        <TouchableOpacity
                            onPress={handleToggleBox}
                            style={{
                                marginVertical: 20,
                                marginLeft: 10,
                            }}
                        >
                            <MaterialCommunityIcons
                                name={
                                    toggleBox
                                        ? "checkbox-marked"
                                        : "checkbox-blank-outline"
                                }
                                size={24}
                                color={pryColor}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                marginLeft: 10,
                                // justifyContent: "center",
                            }}
                        >
                            <Text style={[styles.text, { fontSize: 12 }]}>
                                {"By clicking the box, you have agreed to the "}
                            </Text>
                            <TouchableOpacity>
                                <Text
                                    style={[styles.text, { color: pryColor }]}
                                >
                                    {"Terms of Services "}
                                </Text>
                            </TouchableOpacity>
                            <Text style={[styles.text]}>{"and "}</Text>
                            <TouchableOpacity>
                                <Text
                                    style={[styles.text, { color: pryColor }]}
                                >
                                    {"Privacy policy. "}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={{
                            width: "100%",
                            marginTop: 60,
                            alignItems: "center",
                        }}
                    >
                        <ProgressBar width="0%" />
                        <View
                            style={{
                                flexDirection: "row",
                                marginVertical: 20,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 12,
                                }}
                            >
                                Already have an account?
                            </Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, color: pryColor }}>
                                    {"  Login"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 45 }}>
                            <PButton name="Continue" />
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
    text: {
        fontSize: 12,
    },
});
export default SignUp;
