import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import Header from "../../../components/Header";
import { useForm, Controller } from "react-hook-form";
import { labelgray, pryColor, white } from "../../../utils/color";
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
            otp: "",
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
        <ScrollView style={{ flex: 1, backgroundColor: white }}>
            <Header name="My Card" />
            <View
                style={{
                    marginHorizontal: 20,
                    paddingTop: 30,
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
                        color: labelgray,
                        marginTop: 20,
                    }}
                >
                    Enter OTP Code here
                </Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            keyboardType="numeric"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            maxLength={6}
                        />
                    )}
                    name="otp"
                    rules={{ required: true }}
                />
                <View style={{ marginTop: 330, alignItems: "center" }}>
                    <TouchableOpacity onPress={handlePress()}>
                        <PButton name="Next" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
