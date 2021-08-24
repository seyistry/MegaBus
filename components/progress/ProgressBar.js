import React from "react";
import { Text, View } from "react-native";
import styles from "./styles.js";

const ProgressBar = (props) => {
    return (
        <View style={styles.progressContainer}>
            <View style={styles.progressDisplay}>
                <View style={[styles.progressState, { width: props.width }]} />
                <View />
            </View>
            <Text style={styles.text}>{props.width}</Text>
        </View>
    );
};

export default ProgressBar;
