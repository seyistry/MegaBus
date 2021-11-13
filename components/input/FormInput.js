import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import styles from "./styles.js";
import { Ionicons } from "@expo/vector-icons";

const FormInput = (props) => {
    const [toggle, setToggle] = useState(true);
    // const { label, register, required } = props;

    return (
        <View style={styles.inputContainer}>
            {props.name.toLowerCase() === "password".toLowerCase() ? (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View>
                        <TextInput
                            style={styles.input}
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
            ) : (
                <View>
                    <TextInput
                        style={styles.input}
                        {...props}
                    />
                    {props.errorText && (
                        <Text style={{ color: "red" }}>{props.errorText}</Text>
                    )}
                </View>
            )}
        </View>
    );
};

export default FormInput;
