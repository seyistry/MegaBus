import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { blue, white } from "../../../utils/color";
import { AntDesign } from "@expo/vector-icons";

const WhiteBtn = (props) => (
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
    >
        <AntDesign name="pluscircle" size={17} color={blue} />
        <Text
            style={{
                color: blue,
                fontSize: 11,
                fontWeight: "bold",
                marginLeft: 10,
            }}
        >
            Fund Wallet
        </Text>
    </TouchableOpacity>
);

export default WhiteBtn;
