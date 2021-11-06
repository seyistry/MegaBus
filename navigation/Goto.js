import React, { Component } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Goto = (props) => {
    const navigation = useNavigation();
    const { direction, title, description } = props;

    const handleGoto = () => {
        navigation.navigate(direction, {
            title: title,
            description: description,
        });
    };
    return handleGoto;
};

export default Goto;
