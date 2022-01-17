import React, { useState } from "react";
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from "react-native";
import iconMid from "../../assets/image/iconMid.png";
import logoBig from "../../assets/image/logoBig.png";
import FormInput from "../../components/input/FormInput";
import ProgressBar from "../../components/progress/ProgressBar";
import PButton from "../../components/button/pryButton/PButton";
import Pickers from "../../components/input/Pickers";
import DOBPicker from "../../components/input/DOBPicker";
import { labelgray } from "../../utils/color";
import Goto from "../../navigation/Goto";

const SignUpBio = () => {
    const [toggleBox, setToggleBox] = useState(false);

    const handleToggleBox = () => {
        return !toggleBox ? setToggleBox(true) : setToggleBox(false);
    };

    const handlePress = () => {
        return Goto({
            direction: "SignUpAuthSetUp",
        });
    };

    return (
        <ScrollView>
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
                        flex: 1,
                        // alignItems: "center",
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}>Mobile Number</Text>
                        <View style={styles.spaceDown}>
                            <FormInput name="Fullname" />
                        </View>
                        <Text style={styles.text}>Email</Text>
                        <View style={styles.spaceDown}>
                            <FormInput name="Email" />
                        </View>
                        <Text style={styles.text}>Gender</Text>
                        <View style={styles.spaceDown}>
                            <Pickers />
                        </View>
                        <Text style={styles.text}>Date of Birth</Text>
                        <View style={styles.spaceDown}>
                            <DOBPicker />
                        </View>
                    </View>
                    <View
                        style={{
                            // width: "100%",
                            marginTop: 80,
                            alignItems: "center",
                        }}
                    >
                        <ProgressBar width="40%" />
                        <TouchableOpacity
                            onPress={handlePress()}
                            style={{ marginVertical: 20 }}
                        >
                            <PButton name="Continue" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        marginHorizontal: 20,
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
export default SignUpBio;
