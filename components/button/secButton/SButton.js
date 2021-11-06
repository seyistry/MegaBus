import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles.js";
import { pryColor } from "../../../utils/color.js";

const SButton = (props) => (
    <View style={styles.buttonContainer}>
        {props.icon === "true" ? (
            <>
                <Ionicons
                    name="add-circle-outline"
                    style={{ marginRight: 10 }}
                    size={26}
                    color={pryColor}
                />
                <Text style={styles.text}>{props.name}</Text>
            </>
        ) : (
            <Text style={styles.text}>{props.name}</Text>
        )}
    </View>
);

export default SButton;
