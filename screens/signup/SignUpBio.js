import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import iconMid from "../../assets/image/iconMid.png";
import logoBig from "../../assets/image/logoBig.png";
import FormInput from "../../components/input/FormInput";
import ProgressBar from "../../components/progress/ProgressBar";
import PButton from "../../components/button/pryButton/PButton";
import Pickers from "../../components/input/Pickers";
import DOBPicker from "../../components/input/DOBPicker";

const SignUpBio = () => {
    const [toggleBox, setToggleBox] = useState(false);

    const handleToggleBox = () => {
        return !toggleBox ? setToggleBox(true) : setToggleBox(false);
    };

    return (
        <ScrollView contentContainerStyle={{ flex: 1, marginHorizontal: 20 }}>
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
                        alignItems: "center",
                        marginTop: 20,
                        marginBottom: 40,
                    }}
                >
                    <Image source={iconMid} />
                </View>
                <View
                    style={{
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <View style={{ width: "100%" }}>
                        <View style={styles.spaceDown}>
                            <FormInput name="Full name" />
                        </View>
                        <View style={styles.spaceDown}>
                            <FormInput name="Email" />
                        </View>
                        <View style={styles.spaceDown}>
                            <Pickers />
                        </View>
                        <View style={styles.spaceDown}>
                            <DOBPicker />
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            marginTop: 100,
                            alignItems: "center",
                        }}
                    >
                        <ProgressBar width="50%" />
                        <View style={{ marginVertical: 20 }}>
                            <PButton name="Continue" />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
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
export default SignUpBio;
