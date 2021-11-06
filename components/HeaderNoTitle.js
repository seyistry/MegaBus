import React, { Component } from "react";
import { Text, View } from "react-native";
import { pryColor } from "../utils/color";

const HeaderNoTitle = () => {
    return (
        <View
            style={{
                width: "100%",
                height: 64,
                backgroundColor: pryColor,
                borderBottomEndRadius: 30,
                borderBottomStartRadius: 30,
            }}
        />
    );
};

export default HeaderNoTitle;
