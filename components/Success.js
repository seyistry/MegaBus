import React, { Component } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PButton from "./button/pryButton/PButton";
import { pryColor } from "../utils/color";

const Success = (props) => {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <View
                style={{
                    width: "100%",
                    height: 64,
                    backgroundColor: pryColor,
                    borderBottomEndRadius: 30,
                    borderBottomStartRadius: 30,
                }}
            />
            <Ionicons
                style={{ marginTop: 70 }}
                name="checkmark-circle-sharp"
                size={85}
                color="#70DD4A"
            />
            <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 24,
                    textAlign: "center",
                    marginTop: 30,
                }}
            >
                SUCCESS
            </Text>
            <Text style={{ fontSize: 18, textAlign: "center", marginTop: 20 }}>
                Congratulations! You have successfully registered.
            </Text>
            <View style={{ marginTop: 320 }}>
                <PButton name="Okay" />
            </View>
        </View>
    );
};

export default Success;
