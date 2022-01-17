import React, { useRef } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import logoBig from "../../assets/image/logoBig.png";
import OTPTextView from "react-native-otp-textinput";
import { pryColor } from "../../utils/color";
import ProgressBar from "../../components/progress/ProgressBar";
import PButton from "../../components/button/pryButton/PButton";
import Goto from "../../navigation/Goto";

const SignUpCreatePin = () => {
    // let otpInput = useRef(null);
    const handlePress = () => {
        return Goto({
            direction: "Success",
            description: "Congratulations! You have successfully registered.",
        });
    };

    return (
        <View style={[styles.container]}>
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
                    marginVertical: 50,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        textAlign: "center",
                    }}
                >
                    Create Pin
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        textAlign: "center",
                    }}
                >
                    Create a four digit pin to secure your account
                </Text>
            </View>
            <View
                style={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <OTPTextView
                    // handleTextChange={(e) => {}}
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    tintColor={pryColor}
                />
                <View
                    style={{
                        width: "100%",
                        marginTop: 305,
                        alignItems: "center",
                    }}
                >
                    <ProgressBar width="80%" />
                    <TouchableOpacity onPress={handlePress()} style={{ marginTop: 20 }}>
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
        marginHorizontal: 20,
    },
    textInputContainer: {
        marginBottom: 20,
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 4,
    },
});

export default SignUpCreatePin;
