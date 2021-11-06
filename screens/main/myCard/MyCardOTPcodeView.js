import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import Header from "../../../components/Header";
import { useForm, Controller } from "react-hook-form";
import { pryColor, white } from "../../../utils/color";
import PButton from "../../../components/button/pryButton/PButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import Goto from "../../../navigation/Goto";

const MyCardOTPcodeView = () => {
    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
        },
    });

    const handlePress = () => {
        return Goto({
            direction: "Success",
            title: "SUCCESS",
            description: "Congratulations! The account is bound successfully.",
        });
    };

    return (
        <View style={{ flex: 1, backgroundColor: white }}>
            <Header name="My Card" />
            <View
                style={{
                    marginHorizontal: 20,
                    paddingTop: 20,
                }}
            >
                <Text
                    style={{
                        fontFamily: "HeeboXb",
                        fontSize: 14,
                        marginBottom: 10,
                    }}
                >
                    Confirm OTP Code
                </Text>
                <Text style={{ fontFamily: "HeeboR", fontSize: 14 }}>
                    An OTP code has been sent to your phone number registered
                    with your Bank. Please enter the OTP code below.
                </Text>
                <Text
                    style={{
                        fontFamily: "HeeboM",
                        fontSize: 12,
                        color: "#BDBDBD",
                        marginTop: 20,
                        marginBottom: 10,
                    }}
                >
                    Enter OTP Code here
                </Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            keyboardType="numeric"
                            placeholder="OTP - code"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            maxLength={10}
                        />
                    )}
                    name="firstName"
                    rules={{ required: true }}
                />
                <View style={{ marginTop: 310, alignItems: "center" }}>
                    <TouchableOpacity onPress={handlePress()}>
                        <PButton name="Next" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        borderColor: pryColor,
        borderWidth: 1,
        height: 44,
        padding: 10,
        borderRadius: 4,
    },
});
export default MyCardOTPcodeView;
