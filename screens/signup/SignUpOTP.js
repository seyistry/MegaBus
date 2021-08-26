import React, { useRef } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import logoBig from "../../assets/image/logoBig.png";
import OTPTextView from "react-native-otp-textinput";
import { pryColor } from "../../utils/color";
import ProgressBar from "../../components/progress/ProgressBar";
import PButton from "../../components/button/pryButton/PButton";

const SignUpOTP = () => {
    // let otpInput = useRef(null);

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
                    Enter Code
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        textAlign: "center",
                    }}
                >
                    Please input the code sent to your mobile number
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
                    <ProgressBar width="20%" />
                    <View style={{ marginTop: 20 }}>
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

export default SignUpOTP;
