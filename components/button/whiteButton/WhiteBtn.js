import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { blue, white } from "../../../utils/color";
import { AntDesign } from "@expo/vector-icons";
import Goto from "../../../navigation/Goto";

const WhiteBtn = () => {
    const handlePress = () => {
        return Goto({ direction: "Fund" });
    };

    return (
        <TouchableOpacity
            style={{
                // flex: 1,
                width: 130,
                height: 30,
                backgroundColor: white,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
            }}
            onPress={handlePress()}
        >
            <AntDesign name="pluscircle" size={17} color={blue} />
            <Text
                style={{
                    color: blue,
                    fontSize: 11,
                    fontFamily: "HeeboB",
                    marginLeft: 10,
                }}
            >
                Fund Wallet
            </Text>
        </TouchableOpacity>
    );
};

export default WhiteBtn;
