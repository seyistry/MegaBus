import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../../components/Header";
import NairaIcon from "../../../assets/image/NairaIcon";
import { useForm, Controller } from "react-hook-form";
import { blue, grey, labelgray, pryColor, white } from "../../../utils/color";
import FormInput from "../../../components/input/FormInput";
import PButton from "../../../components/button/pryButton/PButton";
import Goto from "../../../navigation/Goto";
import { amountFormatter } from "../../../utils/formatters";
import BalanceDashboard from "../../../components/BalanceDashboard";

const FundMain = () => {
    const [toggle, setToggle] = useState(false);
    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const handlePress = () => {
        return Goto({ direction: "FundAmountEntered" });
    };

    const handleHideBalance = () =>
        toggle ? setToggle(false) : setToggle(true);

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: white }}
            stickyHeaderIndices={[1]}
        >
            <Header name="Fund Account" />
            <BalanceDashboard />
            <View style={{ flex: 1, marginHorizontal: 20 }}>
                <View style={{ marginVertical: 60 }}>
                    <Text
                        style={{
                            fontFamily: "HeeboB",
                            fontSize: 14,
                            marginBottom: 5,
                        }}
                    >
                        Add Funds to your Account
                    </Text>
                    <Text style={{ fontFamily: "HeeboR", fontSize: 14 }}>
                        Enter the amount below.
                    </Text>
                </View>
                <Text
                    style={{
                        fontFamily: "HeeboR",
                        fontSize: 12,
                        color: labelgray,
                        marginBottom: 5,
                    }}
                >
                    Amount
                </Text>
                <Controller
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInput
                            // style={styles.input}
                            keyboardType="numeric"
                            maxLength={6}
                            onBlur={onBlur}
                            onChangeText={(newValue) =>
                                onChange(amountFormatter(value, newValue))
                            }
                            value={value}
                            // register={register}
                            name="Amount"
                            minLength={3}
                        />
                    )}
                    name="Amount"
                    rules={{
                        required: true,
                        maxLength: 6,
                        minLength: 3,
                        message: "Name is required",
                    }}
                />
                {/* <FormInput
                    name="Amount"
                    type="number"
                    register={register}
                    required
                /> */}
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignItems: "center",
                        marginTop: 190,
                        marginBottom: 25,
                    }}
                    onPress={handleSubmit(handlePress())}
                >
                    <PButton name="Next" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default FundMain;
