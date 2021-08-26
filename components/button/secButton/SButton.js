import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles.js";

const SButton = (props) => (
    <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
);

export default SButton;
