import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import styles from "./styles.js";
import { Ionicons } from "@expo/vector-icons";

const FormInput = (props) => {
    const [toggle, setToggle] = useState(true);

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
                            placeholder={props.name}
                            secureTextEntry={toggle}
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
                    <TextInput style={styles.input} placeholder={props.name} />
                </View>
            )}
        </View>
    );
};

export default FormInput;
