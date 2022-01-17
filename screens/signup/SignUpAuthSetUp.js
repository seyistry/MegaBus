import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import iconMid from "../../assets/image/iconMid.png";
import logoBig from "../../assets/image/logoBig.png";
import FormInput from "../../components/input/FormInput";
import ProgressBar from "../../components/progress/ProgressBar";
import PButton from "../../components/button/pryButton/PButton";
import { labelgray } from "../../utils/color";
import Goto from "../../navigation/Goto";

const SignUpAuthSetUp = () => {
    const handlePress = () => {
        return Goto({
            direction: "SignUpCreatePin",
        });
    };
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
                <Text style={styles.text}>Username</Text>
                <View style={styles.spaceDown}>
                    <FormInput name="username" />
                </View>
                <Text style={styles.text}>Password</Text>
                <View style={styles.spaceDown}>
                    <FormInput name="password" />
                </View>
                <Text style={styles.text}>Confirm Password</Text>
                <View style={styles.spaceDown}>
                    <FormInput name="password" />
                </View>
                <View
                    style={{
                        // width: "100%",
                        marginTop: 118,
                        alignItems: "center",
                    }}
                >
                    <ProgressBar width="60%" />
                    <TouchableOpacity
                        onPress={handlePress()}
                        style={{ marginVertical: 20 }}
                    >
                        <PButton name="Continue" />
                    </TouchableOpacity>
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
        fontFamily: "HeeboR",
        fontSize: 12,
        color: labelgray,
    },
    spaceDown: {
        marginBottom: 10,
    },
});
export default SignUpAuthSetUp;
