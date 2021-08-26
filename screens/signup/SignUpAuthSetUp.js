import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import iconMid from "../../assets/image/iconMid.png";
import logoBig from "../../assets/image/logoBig.png";
import FormInput from "../../components/input/FormInput";
import ProgressBar from "../../components/progress/ProgressBar";
import PButton from "../../components/button/pryButton/PButton";

const SignUpAuthSetUp = () => {
    return (
        <View style={[styles.container, { marginHorizontal: 20 }]}>
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
                    marginTop: 20,
                    marginBottom: 40,
                }}
            >
                <Image source={iconMid} />
            </View>
            <View style={{ width: "100%", marginTop: 40 }}>
                <View style={styles.spaceDown}>
                    <FormInput name="username" />
                </View>
                <View style={styles.spaceDown}>
                    <FormInput name="password" />
                </View>
                <View style={styles.spaceDown}>
                    <FormInput name="password" />
                </View>
                <View
                    style={{
                        width: "100%",
                        marginTop: 128,
                        alignItems: "center",
                    }}
                >
                    <ProgressBar width="75%" />
                    <View style={{ marginVertical: 20 }}>
                        <PButton name="Continue" />
                    </View>
                </View>
            </View>
        </View>
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
    spaceDown: {
        marginBottom: 10,
    },
});
export default SignUpAuthSetUp;
