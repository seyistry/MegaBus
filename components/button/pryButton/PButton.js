import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Goto from "../../../navigation/Goto.js";
import styles from "./styles.js";

const PButton = (props) => (
    <View style={styles.buttonContainer}>
        <Text style={styles.text}>{props.name}</Text>
    </View>
);

export default PButton;
