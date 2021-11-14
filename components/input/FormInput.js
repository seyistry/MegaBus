import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import styles from "./styles.js";
import { Ionicons } from "@expo/vector-icons";
import { pryColor, red } from "../../utils/color.js";

const FormInput = (props) => {
    const [toggle, setToggle] = useState(true);
    // const { label, register, required } = props;

    return (
        <View>
            {props.name.toLowerCase() === "password".toLowerCase() ? (
                <>
                    <View
                        style={[
                            styles.inputContainer,
                            {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderColor: props.errorText ? red : pryColor,
                            },
                        ]}
                    >
                        <View>
                            <TextInput
                                style={styles.inputSecure}
                                secureTextEntry={toggle}
                                {...props}
                            />
                        </View>
                        <View style={styles.icon}>
                            {toggle === true ? (
                                <Ionicons
                                    name="ios-eye-off-outline"
                                    size={22}
                                    color="#000000"
                                    onPress={() => setToggle(false)}
                                />
                            ) : (
                                <Ionicons
                                    name="ios-eye-outline"
                                    size={22}
                                    color="#000000"
                                    onPress={() => setToggle(true)}
                                />
                            )}
                        </View>
                    </View>
                    {props.errorText && (
                        <Text style={{ color: red, fontSize: 10 }}>
                            {props.errorText}
                        </Text>
                    )}
                </>
            ) : (
                <View style={{ flex: 1 }}>
                    <TextInput
                        style={[
                            styles.inputNotSecure,
                            { borderColor: props.errorText ? red : pryColor },
                        ]}
                        {...props}
                    />
                    {props.errorText && (
                        <Text style={{ color: red, fontSize: 10 }}>
                            {props.errorText}
                        </Text>
                    )}
                </View>
            )}
        </View>
    );
};

export default FormInput;
