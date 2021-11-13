import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { pryColor, white } from "../utils/color";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderNoTitle = (props) => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                width: "100%",
                height: 64,
                backgroundColor: pryColor,
                borderBottomEndRadius: 30,
                borderBottomStartRadius: 30,
                justifyContent: "center",
                paddingLeft: 20,
            }}
        >
            {props.goBackButton === true ? (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-thin-left" size={24} color={white} />
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

export default HeaderNoTitle;
