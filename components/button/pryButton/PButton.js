import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from './styles.js'

const PButton = (props) => (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.method}>
        <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
);

export default PButton;
