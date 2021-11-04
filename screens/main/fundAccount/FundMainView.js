import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../../components/Header";
import NairaIcon from "../../../assets/image/NairaIcon";
import { blue, grey, pryColor, white } from "../../../utils/color";
import FormInput from "../../../components/input/FormInput";
import PButton from "../../../components/button/pryButton/PButton";

const FundMain = () => {
    const [toggle, setToggle] = useState(false);

    const handleHideBalance = () =>
        toggle ? setToggle(false) : setToggle(true);

    return (
        <View style={{ flex: 1, backgroundColor: white }}>
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
                <Text style={{ color: grey, fontSize: 12 }}>
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
                <FormInput name="Amount" />
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        marginTop: 210,
                        marginBottom: 25,
                    }}
                >
                    <PButton name="Next" />
                </View>
            </View>
        </View>
    );
};

export default FundMain;