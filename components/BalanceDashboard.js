import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NairaIcon from "../assets/image/NairaIcon";
import { grey, pryColor, white } from "../utils/color";

const BalanceDashboard = () => {
    const [toggle, setToggle] = useState(false);
    const handleHideBalance = () =>
        toggle ? setToggle(false) : setToggle(true);
    return (
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
                        fontFamily: "HeeboXb",
                        color: pryColor,
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
    );
};

export default BalanceDashboard;
