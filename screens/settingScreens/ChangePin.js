import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { blue, grey, labelgray, pryColor, white } from "../../utils/color";
import PButton from "../../components/button/pryButton/PButton";
import Header from "../../components/Header";
import Goto from "../../navigation/Goto";
import FormInput from "../../components/input/FormInput";

const ChangePin = () => {
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
            description: "Pin changed successfully",
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
            <Header name="Change Pin" />
            <View style={{ flex: 1, marginHorizontal: 20 }}>
                <View style={{ marginTop: 40 }}>
                    <Text style={styles.formTitle}>Old Pin</Text>
                    <Controller
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInput
                                errorText={errors?.oldPin?.message}
                                keyboardType="numeric"
                                maxLength={4}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                name="oldPin"
                            />
                        )}
                        name="oldPin"
                        rules={{
                            required: {
                                value: true,
                                message: "Old Pin is required",
                            },
                            maxLength: 4,
                            minLength: {
                                value: 4,
                                message: "Minimum of 6 digits",
                            },
                            message: "Old Pin is required",
                        }}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.formTitle}>New Pin</Text>
                    <Controller
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInput
                                errorText={errors?.newPin?.message}
                                keyboardType="numeric"
                                minLength={4}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                name="Password"
                            />
                        )}
                        name="newPin"
                        rules={{
                            required: {
                                value: true,
                                message: "New Pin is required",
                            },
                            maxLength: 4,
                            minLength: {
                                value: 4,
                                message: "Minimum of 4 digits",
                            },
                            message: "New Pin is required",
                        }}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.formTitle}>Confirm Pin</Text>
                    <Controller
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInput
                                errorText={errors?.confirmPin?.message}
                                keyboardType="numeric"
                                minLength={4}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                name="Password"
                            />
                        )}
                        name="confirmPin"
                        rules={{
                            required: {
                                value: true,
                                message: "Confirm Pin is required",
                            },
                            maxLength: 4,
                            minLength: {
                                value: 4,
                                message: "Minimum of 4 digits",
                            },
                            message: "Confirm Pin is required",
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

export default ChangePin;
