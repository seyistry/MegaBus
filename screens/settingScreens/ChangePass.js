import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { blue, grey, labelgray, pryColor, white } from "../../utils/color";
import PButton from "../../components/button/pryButton/PButton";
import Header from "../../components/Header";
import Goto from "../../navigation/Goto";
import FormInput from "../../components/input/FormInput";

const ChangePass = () => {
    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const handlePress = () => {
        return Goto({
            direction: "Success",
            description: "Password changed successfully",
        });
    };

    const onChange = (arg) => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    // console.log("errors", errors);

    const handleChange = (value) => {
        cardNumberFormatter;
    };

    return (
        <View style={{ flex: 1 }}>
            <Header name="Change Password" />
            <View style={{ flex: 1, marginHorizontal: 20 }}>
                <View style={{ marginTop: 40 }}>
                    <Text style={styles.formTitle}>Old Password</Text>
                    <Controller
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInput
                                errorText={errors?.oldPassword?.message}
                                minLength={6}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                name="Password"
                            />
                        )}
                        name="oldPassword"
                        rules={{
                            required: {
                                value: true,
                                message: "Old Password is required",
                            },
                            maxLength: 14,
                            minLength: {
                                value: 6,
                                message: "Minimum of 6 digits",
                            },
                            message: "Old password is required",
                        }}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.formTitle}>New Password</Text>
                    <Controller
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInput
                                errorText={errors?.newPassword?.message}
                                minLength={6}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                name="Password"
                            />
                        )}
                        name="newPassword"
                        rules={{
                            required: {
                                value: true,
                                message: "New Password is required",
                            },
                            maxLength: 14,
                            minLength: {
                                value: 6,
                                message: "Minimum of 6 digits",
                            },
                            message: "New Password is required",
                        }}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.formTitle}>Confirm Password</Text>
                    <Controller
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInput
                                errorText={errors?.confirmPassword?.message}
                                minLength={6}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                name="Password"
                            />
                        )}
                        name="confirmPassword"
                        rules={{
                            required: {
                                value: true,
                                message: "Confirm Password is required",
                            },
                            maxLength: 14,
                            minLength: {
                                value: 6,
                                message: "Minimum of 6 digits",
                            },
                            message: "Confirm Password is required",
                        }}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={{
                    alignItems: "center",
                    marginTop: 190,
                    marginBottom: 25,
                }}
                onPress={handleSubmit(handlePress())}
            >
                <PButton name="Next" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    formTitle: {
        fontFamily: "HeeboR",
        fontSize: 12,
        color: labelgray,
        marginBottom: 2,
    },
});

export default ChangePass;
