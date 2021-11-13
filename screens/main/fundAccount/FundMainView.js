import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../../components/Header";
import NairaIcon from "../../../assets/image/NairaIcon";
import { useForm, Controller } from "react-hook-form";
import { blue, grey, pryColor, white } from "../../../utils/color";
import FormInput from "../../../components/input/FormInput";
import PButton from "../../../components/button/pryButton/PButton";
import Goto from "../../../navigation/Goto";
import { amountFormatter } from "../../../utils/formatters";

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
            <View
                style={{
                    height: 93,
                    marginHorizontal: 30,
                    alignItems: "center",
                    backgroundColor: white,
                    marginTop: -15,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0,
                    shadowRadius: 2,
                    elevation: 2,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                    }}
                >
                    <NairaIcon color={pryColor} />
                    <Text
                        style={{
                            color: pryColor,
                            fontWeight: "bold",
                            fontSize: 27,
                            marginLeft: 5,
                            marginRight: 10,
                        }}
                    >
                        {toggle ? "**** ***" : "5,000.00"}
                    </Text>
                    <TouchableOpacity onPress={handleHideBalance}>
                        {toggle ? (
                            <Ionicons name="eye" size={18} color={grey} />
                        ) : (
                            <Ionicons name="eye-off" size={18} color={grey} />
                        )}
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        fontFamily: "HeeboM",
                        color: grey,
                        fontSize: 12,
                        textAlign: "center",
                    }}
                >
                    Wallet Balance
                </Text>
            </View>
            <View style={{ flex: 1, marginHorizontal: 20 }}>
                <View style={{ marginVertical: 60 }}>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 14,
                            marginBottom: 5,
                        }}
                    >
                        Add Funds to your Account
                    </Text>
                    <Text style={{ fontSize: 14 }}>
                        Enter the amount below.
                    </Text>
                </View>
                <Text style={{ color: "#BFBFBF", marginBottom: 5 }}>
                    Amount
                </Text>
                <Controller
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInput
                            // style={styles.input}
                            keyboardType="numeric"
                            maxLength={5}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            register={register}
                            name="Amount"
                            minLength={3}
                        />
                    )}
                    name="Amount"
                    rules={{
                        required: true,
                        maxLength: 5,
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
